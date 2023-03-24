'use strict';

const Item = require('./../models/').Item;
const Comment = require('./../models').Comment;
const User = require('./../models').User;
const sequelize = require('sequelize');

exports.items = async function(req, res) {

    try {
        const items = await Item.findAll();
        console.log(items);
        


    } catch (error) {
        console.log(error);
    }
}

exports.item = async function(req, res) {
    try {
        const item = await Item.findByPk(req.params.id, {
            include: { model: Comment, as: 'comments', 
                include: {
                model: User, as: 'user'
                }
            },
        });
        console.log('ITEM ------ ', item);
        
        res.render('itemPage' , {item, user: req.user});
    } catch (error) {
        console.log(error);
    }
}

exports.itemAdd = async function(req, res) {
    
    try {
        let item = await Item.create(req.body);
        res.send(item);

    } catch (error) {
        res.json({error})
        console.log('error ---- ', error);
    }
}   
