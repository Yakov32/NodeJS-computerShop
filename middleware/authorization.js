'use strict';

exports.checkUser = (req, res, next) => {
    if(!req.user) {
        req.flash('error', 'Для этого требуется авторизоваться!');
        return res.redirect('/auth');
    }

    return next();
}

exports.checkAdmin = (req,res,next) => {
    if(!req.user || !req.user.isAdmin) {
        req.flash('error', 'Это действие доступно только админам!');
        return res.redirect('/');
    }

    return next();
}

exports.alreadyAuthorized = (req, res, next) => {
    if(req.user && (req.user.id && req.user.name)) {
        req.flash('error', 'Для регистрации или логина сначала разлогинтесь');
        return res.redirect('/');
    }

    return next();
}