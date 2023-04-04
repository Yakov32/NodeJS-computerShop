'use strict';

const {validationResult} = require('express-validator');

exports.validate = (req, res, next) => {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        console.log('express-validator errors ---- ', errors);
        errors.array().map(e => {
            req.flash('error', e.msg);
        });
        req.errorRender = true;
        return next();
    }
    return next();
}