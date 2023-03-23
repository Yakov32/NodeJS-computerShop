'use strict';

exports.sendForm = async function(req, res) {
    res.render('regist_login', {auth: true, reg: false, alerts: (req.session.messages ? req.session.messages : [])});    
}

exports.auth = async function(req, res) {
    
    res.redirect('/');
}   
