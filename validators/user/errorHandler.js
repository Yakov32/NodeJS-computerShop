'use strict';

module.exports = (req, res, next) => {
    if(req.errorRender === true) {
        return res.redirect('/regist');
    }
    next();
}