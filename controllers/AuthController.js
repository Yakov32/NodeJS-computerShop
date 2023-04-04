'use strict';

exports.sendForm = async function(req, res) {
    let alerts = [];
    alerts = alerts.concat(req.flash('error'));
    alerts = alerts.concat(req.flash('success'));
    alerts = alerts.concat(req.session.messages ? req.session.messages : [])
    res.render('regist_login', {auth: true, reg: false, alerts});    
}

exports.auth = async function(req, res) {
    
    res.redirect('/');
}   

exports.logout = function (req, res, next) {
    req.logout(function(err) {
        if (err) { 
            return next(err); 
        }
        return res.redirect('/auth');
    })
}