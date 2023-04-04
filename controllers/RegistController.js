'use strict';

const User = require('../models').User;

exports.sendForm = async function(req, res) {
    let alerts = [];
    alerts = alerts.concat(req.flash('error'));
    alerts = alerts.concat(req.flash('success'));
    alerts = alerts.concat(req.session.messages ? req.session.messages : [])
    res.render('regist_login', {reg: true, auth: false, alerts}); 
}

exports.registrate = async function(req, res) {

    console.log('BODY ---', req.body);

    try {
        const existedUser = await User.findOne({where: {
            email: req.body.user_email
        }});

        if(existedUser) {
            res.render('regist_login', { reg: true, auth: false, alerts: [
                'Пользователь с такой почтой уже зарегестрирован'
            ]})
            return;
        }
        
        let user =  await User.create({email: req.body.user_email, password: req.body.user_password});

        if(!user) {
            res.render('regist_login', { reg: false, auth: true, alerts: [
                'Не удалось зарегестрировать. Неизвестная ошибка сервера'
            ]})
            return;
        }

        res.render('regist_login', {reg: false, auth: true, alerts: [
            'Пользователь зарегестрирован! Авторизуйтесь'
        ]});
    } catch (error) {
        res.render('regist_login', {
            reg: true, auth: false, alerts: [
                error.message,
            ]
        })
        console.log('ERROR ------ ', error.message);
    }
}   
