'use strict';

const User = require('./../models').User;

exports.getProfile = async function(req, res) {
    
   res.render('profile/userProfile', {user: req.user});
}

// exports.changeAvatar = async function(req, res) {
//     res.render('profile/changeAvatar', {user: req.user});
// }

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