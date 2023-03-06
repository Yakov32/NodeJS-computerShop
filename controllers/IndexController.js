'use strict';

const Item = require('./../models/').Item;
const Category = require('./../models/').Category;
const Company = require('./../models/').Company;
const { Op } = require('sequelize');

exports.index = async function(req, res) {

    try {
        
        console.log('REQ query ----------  ', req.query);
        console.log('tooo number -------', typeof +req.query.priceFrom);

        let sortField = 'price';
        let sortType = 'ASC';

        if(req.query.sort) {
            let sort = req.query.sort.split('-');
            sortField = sort[0];
            sortType  = sort[1];
            console.log('SORT FIELD : ', sortField, 'SORT TYPE : ', sortType);
        }
        
        // console.log('sort ----- ', sort);

        const categories = await Category.findAll();
        const companies  = await Company.findAll({
            raw: true
        });

        const companiesTitles = companies.map(item => item.title);
        
    
        let items = await Item.findAll({
            //attributes: ['title', 'price'],
            include: [ {model: Category, as: 'category'}, {model: Company, as: 'company'}],
            where: {
                [Op.and] : [
                    {
                        [Op.or] : [
                            {
                                title: {
                                    [Op.iLike] : req.query.search ? '%'+req.query.search+'%' : '%'+ '' +'%',
                            }},
                            {
                                description: {
                                    [Op.iLike] : req.query.search ? '%'+req.query.search+'%' : '',
                                }
                            },
                        ]
                    },
                    {
                        price: {
                            [Op.and] : [
                                {[Op.lte] : +req.query.priceTo ? +req.query.priceTo : 1000000000},
                                {[Op.gte] : +req.query.priceFrom ? +req.query.priceFrom : 0},
                            ]
                    }},
                    {
                        '$category.title$' : {
                            [Op.substring] : req.query.category ? req.query.category : ''
                        }
                    },
                    {
                        '$company.title$' : {
                            [Op.in] : req.query.companies ? req.query.companies : companiesTitles
                        }
                    },

                ],    
            },
            order: [
                [sortField, sortType]
            ],
            //limit: 30 
        });
        
        
        res.render('index', {items, categories, companies});
        
    } catch (error) {
        console.log('SEARCH CONTROLLER ERROR ------ ', error);
        res.send(`SEARCH CONTROLLER ERROR ------ ' ${error}`);
    }
}