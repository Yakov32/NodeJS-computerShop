'use strict';

const {expect} = require('chai');
const Item = require('./../models').Item;
const Category = require('./../models').Category;
const Company = require('./../models').Company;
const {validationResult} = require('express-validator');
const rules = require('./../validators/item/rules');
const sinon = require('sinon');

describe('Validation of create item', function () {

    let req = {};

    before(function() {
        req = { body: {itemName: '', itemPrice: '', category: '', itemCompany: ''} };
    })
    
    afterEach(function() {
        req = { body: {itemName: '', itemPrice: '', category: '', itemCompany: ''} };
    }) 

    //Item name
    it('should not change itemName if that is a correct string', function (done) {

        req.body.itemName = 'NVidia 3060 ti';

        const fakeGetItem = sinon.fake.resolves(null);
        sinon.replace(Item, 'findOne', fakeGetItem);

        rules.itemName(req, {}, function (){
            try {
                const errors = validationResult(req).array();
                expect(req.body.itemName).to.equal('NVidia 3060 ti');
                expect(errors).is.empty;
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
        })
    });
    
    it('should return an error if itemName already in use', function (done) {

        req.body.itemName = 'NVidia 3060 ti';

        const fakeGetItem = sinon.fake.resolves({id: 5, title: 'NVidia 3060'});
        sinon.replace(Item, 'findOne', fakeGetItem);

        rules.itemName(req, {}, function (){
            try {
                const errors = validationResult(req).array();
                expect(req.body.itemName).to.equal('NVidia 3060 ti');
                expect(errors[0]).to.deep.equal({
                    value: 'NVidia 3060 ti',
                    msg: 'Товар с таким названием уже существует',
                    param: 'itemName',
                    location: 'body'
                  })
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
        })
    });

    it('should return an error if itemName is not a string', function (done) {

        req.body.itemName = [2,5,8];

        const fakeGetItem = sinon.fake.resolves({});
        sinon.replace(Item, 'findOne', fakeGetItem);

        rules.itemName(req, {}, function (){
            try {
                const errors = validationResult(req).array();
                expect(errors[0]).to.deep.equal({
                    value: [2,5,8],
                    msg: 'Название товара должно быть не пустой строкой',
                    param: 'itemName',
                    location: 'body'
                  })
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
        })
    });  

    it('should return an error if itemName incorrect length', function (done) {

        req.body.itemName = 'NVi';

        const fakeGetItem = sinon.fake.resolves({});
        sinon.replace(Item, 'findOne', fakeGetItem);

        rules.itemName(req, {}, function (){
            try {
                const errors = validationResult(req).array();
                expect(errors[0]).to.deep.equal({
                    value: 'NVi',
                    msg: 'Название товара должно быть >=6 и <= 150',
                    param: 'itemName',
                    location: 'body'
                  })
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
        })
    });

    //Item price
    it('should return no error if itemPrice is a number with correct length', function (done) {

        req.body.itemPrice = 450;

        rules.itemPrice(req, {}, function (){
            try {
                const errors = validationResult(req).array();
                expect(errors).to.be.empty;
                done();
            } catch (e) {
                done(e);
            }
        })
    });

    it('should return an error if itemPrice not a number', function (done) {

        req.body.itemPrice = 'kdasdsad';

        rules.itemPrice(req, {}, function (){
            try {
                const errors = validationResult(req).array();
                expect(errors[0]).to.deep.equal({
                    value: 'kdasdsad',
                    msg: 'Цена должна быть числом',
                    param: 'itemPrice',
                    location: 'body'
                });
                done();
            } catch (e) {
                done(e);
            }
        })
    });

    it('should return an error if itemPrice is a number with incorrect length', function (done) {

        req.body.itemPrice = 7;

        rules.itemPrice(req, {}, function (){
            try {
                const errors = validationResult(req).array();
                expect(errors[0]).to.deep.equal({
                    value: 7,
                    msg: 'Минимум 2 цифры в цене',
                    param: 'itemPrice',
                    location: 'body'
                });
                done();
            } catch (e) {
                done(e);
            }
        })
    });
    
    //Item category

    it('should return no error if req.body.category exists in the database', function(done) {
        req.body.category = 'Процессоры';

        const fakeGetCategory = sinon.fake.resolves({id: 2, title: 'Процессоры'});
        sinon.replace(Category, 'findOne', fakeGetCategory);

        rules.itemCategory(req, {}, function() {
            try {
                const errors = validationResult(req).array();
                expect(errors).to.be.empty;
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
        })
    });

    it('should return an error if req.body.category is empty', function (done) {

        req.body.category = '';

        rules.itemCategory(req, {}, function (){
            try {
                const errors = validationResult(req).array();
                expect(errors[0]).to.deep.equal({
                    value: '',
                    msg: 'Укажите категорию.',
                    param: 'category',
                    location: 'body'
                });
                done();
            } catch (e) {
                done(e);
            }
        })
    });

    it('should return an error if req.body.category does not exist in the database', function (done) {

        req.body.category = 'Мышки';

        const fakeGetCategory = sinon.fake.resolves(null);
        sinon.replace(Category, 'findOne', fakeGetCategory);

        rules.itemCategory(req, {}, function (){
            try {
                const errors = validationResult(req).array();
                expect(errors[0]).to.deep.equal({
                    value: 'Мышки',
                    msg: 'Такой категории не существует в базе данных',
                    param: 'category',
                    location: 'body'
                });
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
        })
    });

    //Item company

    it('should return no error if req.body.company exists in the database', function (done) {

        req.body.company = 'Nvidia';

        const fakeGetCompany = sinon.fake.resolves({id: 3, title: 'NVidia'});
        sinon.replace(Company, 'findOne', fakeGetCompany);

        rules.itemCompany(req, {}, function (){
            try {
                const errors = validationResult(req).array();
                expect(errors).to.be.empty;
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
        })
    });

    it('should return an error if req.body.company is empty', function (done) {

        req.body.company = '';

        const fakeGetCompany = sinon.fake.resolves(null);
        sinon.replace(Company, 'findOne', fakeGetCompany);

        rules.itemCompany(req, {}, function (){
            try {
                const errors = validationResult(req).array();
                expect(errors[0]).to.deep.equal({
                    value: '',
                    msg: 'Укажите компанию.',
                    param: 'company',
                    location: 'body'
                  });
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
        })
    });

    it('should return an error if req.body.company does not exist in the database', function (done) {

        req.body.company = 'PunNum';

        const fakeGetCompany = sinon.fake.resolves(null);
        sinon.replace(Company, 'findOne', fakeGetCompany);

        rules.itemCompany(req, {}, function (){
            try {
                const errors = validationResult(req).array();
                expect(errors[0]).to.deep.equal({
                    value: 'PunNum',
                    msg: 'Такой компании не существует в базе данных',
                    param: 'company',
                    location: 'body'
                  });
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
        })
    });
})