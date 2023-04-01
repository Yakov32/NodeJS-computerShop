'use strict';

const Comment = require('./../models/').Comment;
const Item = require('./../models').Item;
const User = require('./../models').User;

exports.create = async function (req, res, next)  {
    
    const comment = await Comment.create({
        text: req.body.commentText,
        user_id: req.body.commentUserId,
        item_id: req.body.commentItemId,
    })

    if(comment) {
        return res.redirect(`/items/get/${req.body.commentItemId}`);
    }    
}