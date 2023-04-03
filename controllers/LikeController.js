'use strict';

const Like = require('./../models').Like;

exports.createOrDelete = async function(req, res) {
    let like = await Like.findOne({where: {item_id: req.body.itemId, user_id: req.user.id}});

    if(like) {
        await Like.destroy( {where: {item_id: req.body.itemId, user_id: req.user.id}} );
        return res.json({status: 'error', msg: 'Like already exists'})
    }

    like = await Like.create({item_id: req.body.itemId, user_id: req.user.id});

    if(!like) {
        return req.json('Yasha error');
    }
    return res.json({response: 'ok', 'like': like})
}
