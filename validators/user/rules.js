'use strict';

const {body} = require('express-validator');

exports.rules = () => {
    return [
        body('user_email').isEmail().withMessage('Некорректная почта'),
        body('user_password').isLength({min: 6}).withMessage('Пароль должен быть >= 6'),
    ];
}