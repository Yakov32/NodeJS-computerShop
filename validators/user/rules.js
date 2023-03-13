'use strict';

const {body} = require('express-validator');

exports.rules = () => {
    return [
        body('email').isEmail().withMessage('Некорректная почта'),
        body('password').isLength({min: 6}).withMessage('Пароль должен быть >= 8'),
    ];
}