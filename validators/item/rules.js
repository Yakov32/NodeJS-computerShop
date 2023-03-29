'use strict';

const {body} = require('express-validator');

const Company = require('./../../models').Company;
const Category = require('./../../models').Category;
const Item = require('./../../models').Item;

module.exports =  () => {
    return [
        body('itemName').notEmpty().withMessage('Название товара не должно быть пустое')
            .isLength({min: 6, max: 150}).withMessage('Название товара должно быть >=6 и <= 150')
            .custom(async function (name) {
                const item = await Item.findOne({raw: true, where: { title: name}});
                console.log('ITEM ----- ', item);
                if (item) {
                    return Promise.reject('Товар с таким названием уже существует');
                }
                return true;
            }),

        body('itemPrice').isNumeric().withMessage('Цена должна быть числом')
            .isLength({min: 2}).withMessage('Минимум 2 цифры в цене')
            .toInt(),

        body('category').custom( async function (value) {
            if (!value) {
                return Promise.reject('Укажите категорию.');
            }
            const category = await Category.findOne({raw: true, where: {title: value}});
            if (!category) {
                return Promise.reject('Такой категории не существует в базе данных');
            }
            return true;
        }),

        body('company').custom( async function (value) {
            if (!value) {
                return Promise.reject('Укажите компанию.');
            }
            const company = await Company.findOne({raw: true, where: {title: value}});
            if (!company) {
                return Promise.reject('Такой компании не существует в базе данных');
            }
            return true;
        }),
    ];
}