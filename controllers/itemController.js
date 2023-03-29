'use strict';

const Item = require('./../models/').Item;
const Comment = require('./../models').Comment;
const User = require('./../models').User;
const Company = require('./../models').Company;
const Category = require('./../models').Category;


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

exports.itemCreate = async function(req, res) {
    
    try {
        const category = await Category.findOne({raw: true, where: {
            title: req.body.category
        }});
        const company = await Company.findOne({raw: true, where: {
            title: req.body.company
        }});

        let item = await Item.create({
            title: req.body.itemName,
            price: req.body.itemPrice,
            category_id: category.id,
            company_id: company.id,
            imgPath: req.file?.filename,
        });

        if(!item) {
            res.render('itemCreate', {user: req.user, companies, categories, alerts: ['Ошибка сервера. Не вышло создать товар']});
        }

        const companies = await Company.findAll();
        const categories = await Category.findAll();
        res.render('itemCreate', {user: req.user, companies, categories, alerts: ['Товар создан!']});
        
    } catch (error) {
        res.send('error ----' + error.message )
        console.log('error ---- ', error.message);
    }
}

exports.itemCreateForm = async function(req, res) {
    try {
        
        const categories = await Category.findAll();
        const companies  = await Company.findAll();

        res.render('itemCreate', {user: req.user, categories, companies});
        
    } catch (error) {
        console.log('error ----', error);
    }   
}
