'use strict';

module.exports = (req, res, next) => {
    
    if((req.errorRender === true) && req.errorsToRender) {
        return res.render('regist_login', {auth: false, reg: true, alerts: req.errorsToRender.array().map(e => e.msg)});
    }

    next();
}