'use strict';

const Item = require('./../models/').Item;
const sequelize = require('sequelize');

exports.items = async function(req, res) {

    try {
        const items = await Item.findAll();
        res.render('index', { 'items': items })


    } catch (error) {
        console.log(error);
    }
}

exports.item = async function(id) {
    
    //zapros k bd poluchit vse items
    //vozratit v route i vivesti
}
