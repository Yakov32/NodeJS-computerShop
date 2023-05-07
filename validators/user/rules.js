'use strict';

const {body} = require('express-validator');

exports.rules =  {
    email: body('user_email').isEmail().withMessage('Некорректная почта'),
    password: body('user_password').isLength({min: 6}).withMessage('Пароль должен быть >= 6'),
}