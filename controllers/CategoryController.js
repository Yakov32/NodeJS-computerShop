'use strict';

const Item = require('./../models/').Item;
const Category = require('./../models/').Category;
const sequelize = require('sequelize');

exports.getItems = async function(req, res) {

    try {
        
        let category = await Category.findByPk(req.params.id);

        let items = await category.getItems();
        
        res.send(items);

    } catch (error) {
        console.log(error);
    }
}