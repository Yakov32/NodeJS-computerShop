'use strict';

const Item = require('./../../models').Item;
const User = require('./../../models').User;
const Comment = require('./../../models').Comment;

module.exports = async (req, res, next) => {
    
    if((req.errorRender === true) && req.errorsToRender) {
        req.alerts = req.errorsToRender.array().map(e => e.msg);
        if (!req.body.commentItemId) {
            return res.send('Ошибка. Нету id обьекта комментария');
        }
        const item = await Item.findByPk(req.body.commentItemId, {
            include: { model: Comment, as: 'comments', 
                include: {
                model: User, as: 'user'
                }
            },
        });
        if (!item) {
            return res.send('Ошибка. Нету обьекта комментария');
        }
        console.log('item ---- ', item);
        console.log('alerts -----', req.alerts);
        return res.render('itemPage', 
            {
                alerts: req.errorsToRender.array().map(e => e.msg),
                user: req.user,
                item,
            }
        );
    }

    next();
}