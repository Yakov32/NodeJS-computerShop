'use strict';

const Item = require('./../models/').Item;
const Category = require('./../models/').Category;
const Company = require('./../models/').Company;
const Like = require('./../models').Like;
const { Op } = require('sequelize');
const moment = require('moment');moment.locale('ru');

exports.index = async function(req, res) {
    try {
        let [sortField, sortType] = req.query.sort.split('-');

        let items = await Item.findAll({
            include: [ {model: Category, as: 'category'}, {model: Company, as: 'company'}, {model: Like, as: 'likes'}],
            where: {
                [Op.and] : [
                    {
                        [Op.or] : [
                            {
                                title: {
                                    [Op.iLike] : `%${req.query.search}%`,
                            }},
                            {
                                description: {
                                    [Op.iLike] : `%${req.query.search}%`,
                                }
                            },
                        ]
                    },
                    {
                        price: {
                            [Op.and] : [
                                {[Op.lte] : req.query.priceTo},
                                {[Op.gte] : req.query.priceFrom},
                            ]
                    }},
                    {
                        '$category.title$' : {
                            [Op.substring] : req.query.category
                        }
                    },
                    {
                        '$company.title$' : {
                            [Op.in] : req.query.companies
                        }
                    },
                ],    
            },
            order: [
                [sortField, sortType]
            ],
        });
        
        let alerts = [];
        alerts = alerts.concat(req.flash('error'));
        alerts = alerts.concat(req.flash('success'));

        const categories = await Category.findAll({raw: true});
        const companies  = await Company.findAll({raw: true});

        return res.render('index', {items, categories, companies, user: req.user, moment, alerts, previousQuery: req.query});
        
    } catch (error) {
        console.log('SEARCH CONTROLLER ERROR ------ ', error);
        req.flash('error', `Ошибка поиска ---- ${error.message}`)
        res.redirect('/');
    }
}