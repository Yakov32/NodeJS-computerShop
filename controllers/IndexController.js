'use strict';

const Item = require('./../models/').Item;
const Category = require('./../models/').Category;
const sequelize = require('sequelize');

exports.index = async function(req, res) {

    try {
        
        let items = await Item.findAll({
            include: [{ model: Category, as: 'category' }],
            attributes: {
                exclude: ['category_id']
            }
        });
        let categories = await Category.findAll();

        res.render('index', {items, categories});
        
    } catch (error) {
        console.log(error);
    }
}