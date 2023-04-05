'use strict';

const User = require('./../models').User;
const Comment = require('./../models').Comment;
const Like = require('./../models').Like;
const Item = require('./../models').Item;
const moment = require('moment');moment.locale('ru');
const fs = require('fs')
const path = require('path');

exports.getProfile = async function(req, res) {

   const fullUser = await User.findByPk(req.user.id, {include: [
        {model: Comment, as: 'comments'}, 
        {model: Like, as: 'likes', include: {
            model: Item, as: 'item'
        }}
    ]});
   req.user.comments = fullUser.comments;
   req.user.likes = fullUser.likes;

   let alerts = [];
   alerts = alerts.concat(req.flash('error'));
   res.render('profile/userProfile', {user: req.user, alerts, moment});
}

exports.changeAvatar = async function(req, res) {
    
    if(!req.file) {
        req.flash('error', 'Ошибка. Картинка не отправлена!');
        return res.redirect('/profile');
    }

    let user = await User.findOne({
        raw: true,
        where: {
            id: req.user.id,
            email: req.user.email || req.user.name
        },
    });

    const oldImgPath = path.resolve(`public/uploads/users/${user.imgPath}`);
    
    user = await User.update({imgPath: req.file.filename}, {
        where: {
            id: req.user.id,
            email: req.user.email || req.user.name
        },
        fields: ['imgPath'], 
    });

    if(!user) {
        req.flash('error', 'Ошибка сервера. Не вышло поменять аватар!');
        return res.redirect('/profile');
    }

    //удаляем прошлый аватар
    if(oldImgPath) {
        fs.readFile(oldImgPath, (err) => {
            if(!err) {
                fs.unlink(oldImgPath, (err) => {
                    if(!err) {
                        console.log(`Success---. Old Avatar ${oldImgPath} -- was deleted`) 
                    } 
                }) 
            } else {
                console.log(`Error---. Old Avatar was not deleted`)
                console.log('Message ---', err.message); 
            }
        });
    }

    user = await User.findOne({where: { id: req.user.id, email: req.user.email || req.user.name}})

    req.session.passport.user.avatar = user.imgPath;
    res.redirect('/profile');
}