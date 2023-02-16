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

        res.send(items);
        
    } catch (error) {
        console.log(error);
    }
}