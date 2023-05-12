'use strict';

const {body} = require('express-validator');

const Company = require('./../../models').Company;
const Category = require('./../../models').Category;
const Item = require('./../../models').Item;

module.exports = {
    itemName: body('itemName').notEmpty().isString().withMessage('Название товара должно быть не пустой строкой')
        .isLength({min: 6, max: 150}).withMessage('Название товара должно быть >=6 и <= 150')
        .custom(async function (name) {
            const item = await Item.findOne({raw: true, where: { title: name}});
            if (item) {
                return Promise.reject('Товар с таким названием уже существует');
            }
            return true;
        }),

    itemPrice: body('itemPrice').isNumeric().withMessage('Цена должна быть числом')
        .isLength({min: 2}).withMessage('Минимум 2 цифры в цене')
        .toInt(),

    itemCategory: body('category').custom( async function (value) {
        if (!value) {
            return Promise.reject('Укажите категорию.');
        }
        const category = await Category.findOne({raw: true, where: {title: value}});
        if (!category) {
            return Promise.reject('Такой категории не существует в базе данных');
        }
        return true;
    }),

    itemCompany: body('company').custom( async function (value) {
        if (!value) {
            return Promise.reject('Укажите компанию.');
        }
        const company = await Company.findOne({raw: true, where: {title: value}});
        if (!company) {
            return Promise.reject('Такой компании не существует в базе данных');
        }
        return true;
    }),
}