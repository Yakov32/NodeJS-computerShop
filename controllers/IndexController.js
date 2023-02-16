'use strict';

const Item = require('./../models/').Item;
const sequelize = require('sequelize');

exports.index = async function(req, res) {

    try {
        const items = await Item.findAll();
        
        res.render('index.ejs', {items});

        items.forEach(element => {
            console.log(element.toJSON());
        });
        
    } catch (error) {
        console.log(error);
    }
}