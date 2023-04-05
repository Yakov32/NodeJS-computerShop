'use strict';

const User = require('./../models').User;
const Comment = require('./../models').Comment;
const Like = require('./../models').Like;
const Item = require('./../models').Item;
const moment = require('moment');moment.locale('ru');

exports.getProfile = async function(req, res) {

   const fullUser = await User.findByPk(req.user.id, {include: [
        {model: Comment, as: 'comments'}, 
        {model: Like, as: 'likes', include: {
            model: Item, as: 'item'
        }}
    ]});
   req.user.comments = fullUser.comments;
   req.user.likes = fullUser.likes;

   console.log(req.user);
   res.render('profile/userProfile', {user: req.user, moment});
}

exports.changeAvatar = async function(req, res) {
    
    if(!req.file) {
        return res.render('profile/userProfile', {user: req.user, alerts: ['Ошибка! Картинка не отправлена']});
    }

    let user = await User.update({imgPath: req.file.filename}, {
        where: {
            id: req.user.id,
            email: req.user.email || req.user.name
        },
        fields: ['imgPath'], 
    });

    if(!user) {
        return res.render('profile/userProfile', {user: req.user, alerts: ['Ошибка сервера. Не вышло поменять аватар']});
    }

    user = await User.findOne({where: { id: req.user.id, email: req.user.email || req.user.name}})

    req.session.passport.user.avatar = user.imgPath;
    res.redirect('/profile');
}