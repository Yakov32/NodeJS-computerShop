'use strict';

const {validationResult} = require('express-validator');

exports.validate = (req, res, next) => {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        console.log('express-validator errors ---- ', errors);
        req.errorRender = true;
        req.errorsToRender = errors;
        return next();
    }

    console.log('asdas2311')
    next();
}