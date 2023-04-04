'use strict';

module.exports = async (req, res, next) => {
    if(req.errorRender === true) {
        return res.redirect('/items/create');
    }
    next();
}