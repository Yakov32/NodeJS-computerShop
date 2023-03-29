'use strict';

exports.checkUser = (req, res, next) => {
    if(!req.user) {
        return res.redirect('/auth');
    }

    return next();
}