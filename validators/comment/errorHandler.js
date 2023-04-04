'use strict';

module.exports = async (req, res, next) => {
    if(req.errorRender == true) {
        if(req.body.commentItemId) {
            return res.redirect(`/items/get/${req.body.commentItemId}`)
        }
        return res.redirect('/');
    }
    next();
}