'use strict';

const { query } = require('express-validator');

const User = require('../../models').User;
const Item = require('../../models').Item;
const Category = require('../../models').Category;
const Company  = require('../../models').Company;

module.exports =   {

    search: query('search').customSanitizer(value => {
        if(!value) {
            return '';
        }
        return value;
    }),

    priceFrom: query('priceFrom').toInt().customSanitizer(priceFrom => {
        if(!priceFrom || isNaN(priceFrom)) {
            return 0;
        }
        return priceFrom;
    }),

    priceTo: query('priceTo').toInt().customSanitizer(priceTo => {
        if(!priceTo || isNaN(priceTo)) {
            return 100000000;
        }
        return priceTo;
    }),

    category: query('category').customSanitizer(async category => {
        if(!category || (typeof category !== 'string')) {
            return '';
        }
        const res = await inCategoriesCheck(category);
        return res ? category : '';
    }),

    companies: query('companies').customSanitizer(async companies => {
        if(!companies || !Array.isArray(companies) || companies.length == 0 || !companiesElementsAreStrings(companies)) {
            return getCompaniesTitles();
        }
        const res = await companiesCheck(companies);
        return res ?  companies : await getCompaniesTitles();
    }),

    sort: query('sort').customSanitizer(sort => {
        if(!sort || typeof sort !== 'string') {
            return 'price-ASC';
        }
        const sortArr = sort.split('-');
        if((!sortArr[0] || !sortArr[1]) || (typeof sortArr[0] !== 'string' || typeof sortArr[1] !== 'string')) {
            return 'price-ASC';
        }
        return sort;
    }), 
}

async function inCategoriesCheck(category) {
    const categories = await Category.findAll({raw: true});
    for(let i = 0; i < categories.length; i++) {
        if(categories[i].title == category) {
            return true;
        }
    }
    return false;
}

async function companiesElementsAreStrings(companies) {
    for(let i = 0; i < companies.length; i++){
        if(typeof companies[i] !== 'string') return false;
    }
    return true;
}

async function companiesCheck(companies) {
    const templateCompanies = await Company.findAll({raw: true});
    let neededLength = 0;
    for(let i = 0; i < templateCompanies.length; i++) {
        for(let j = 0; j < companies.length; j++) {
            if(companies[j] === templateCompanies[i].title) {
                neededLength++;
            }
        }
    }
    return neededLength == companies.length;
}

async function getCompaniesTitles() {
    const companies = await Company.findAll({raw: true});
    return companies.map(i => i.title);
}