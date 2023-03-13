'use strict';

const {validationResult} = require('express-validator');

exports.validate = (req, res, next) => {
    
    const errors = validationResult(req);

    if(errors) {
        req.errorRender = true;
        req.errorsToRender = errors;
        return next();
    }

    console.log('asdas2311')
    next();
}