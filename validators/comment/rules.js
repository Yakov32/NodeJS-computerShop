'use strict';

const {body} = require('express-validator');

const User = require('./../../models').User;
const Item = require('./../../models').Item;

module.exports =  () => {
    return [
        body('commentText').notEmpty().withMessage('Ошибка. Текст комментария пустой!')
            .isLength({min: 3, max: 250}).withMessage('Ошибка. Длинна комментария должна быть от 3 до 250 символов'),
        
        body('commentUserId').notEmpty().withMessage('Ошибка. Автор комментария не получен')
            .custom(async function(userId) {
                try {
                    const user = await User.findByPk(userId);
                    if(!user) {
                        return Promise.reject();
                    }
                    
                } catch (error) {
                    return Promise.reject();
                }
            }).withMessage('Ошибка. Что-то не так с отправителем комментария'),

        body('commentItemId').notEmpty().withMessage('Ошибка. Обьект комментария не получен')
            .custom(async function(itemId) {
                try {
                    const item = await User.findByPk(itemId);
                    if(!item) {
                        return Promise.reject();
                    }
                    
                } catch (error) {
                   return Promise.reject();
                }
            }).withMessage('Ошибка. Что-то не так с обьектом комментирования')
    ];
}