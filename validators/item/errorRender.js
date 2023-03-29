'use strict';

const Company = require('./../../models').Company;
const Category = require('./../../models').Category;

module.exports = async (req, res, next) => {
    
    if((req.errorRender === true) && req.errorsToRender) {
        req.alerts = req.errorsToRender.array().map(e => e.msg);
        console.log('alerts -----', req.alerts);
        return res.render('itemCreate', 
            {
                alerts: req.errorsToRender.array().map(e => e.msg),
                categories: await Category.findAll(),
                companies: await Company.findAll(),
            }
        );
    }

    next();
}