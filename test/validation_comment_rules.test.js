'use strict';

const User = require('./../models').User;
const Item = require('./../models').Item;
const sinon = require('sinon')
const {expect} = require('chai');
const {validationResult} = require('express-validator');
const rules = require('./../validators/comment/rules');

describe('Validation of create comment', function () {

    let req = {};

    before(function() {
        req = { body: {commentText: '', commentUserId: '', commentItemId: ''} };
    })
    
    afterEach(function() {
        req = { body: {commentText: '', commentUserId: '', commentItemId: ''} }

        sinon.restore();
    }) 

    it('should return no error for valid comment', function (done) {

        req.body.commentText = 'Отлично';
        rules.commentText(req, {}, () => {
            try {
                const errors = validationResult(req).array();
                expect(errors).to.be.empty;
                done();
            } catch (e) {
                done(e)
            } 
        })
    }); 
    
    it('should return an error for incorrect length of comment', function (done) {

        req.body.commentText = '12';
        rules.commentText(req, {}, () => {
            try {
                const errors = validationResult(req).array();
                expect(errors[0]).to.deep.equal({
                    value: '12',
                    msg: 'Ошибка. Длинна комментария должна быть от 3 до 250 символов',
                    param: 'commentText',
                    location: 'body',
                });
                done();
            } catch (e) {
                done(e)
            } 
        })
    });
    
    //Comment user

    it('should return no error if the user of the comment exists in the database', function (done) {

        req.body.commentUserId = 25;

        const fakeGetUser = sinon.fake.resolves({id: 25, email: 'volodya@gmail.com'});
        sinon.replace(User, 'findByPk', fakeGetUser);

        rules.commentUser(req, {}, () => {
            try {
                const errors = validationResult(req).array();
                expect(errors).to.be.empty;
                done();
            } catch (e) {
                done(e)
            } 
        })
    });
    
    it('should return an error if the user_id of the comment is empty', function (done) {

        req.body.commentUserId = '';

        const fakeGetUser = sinon.fake.resolves(null);
        sinon.replace(User, 'findByPk', fakeGetUser);

        rules.commentUser(req, {}, () => {
            try {
                const errors = validationResult(req).array();
                expect(errors[0]).to.deep.equal({
                    value: '',
                    msg: 'Ошибка. Автор комментария не получен',
                    param: 'commentUserId',
                    location: 'body'
                  });
                done();
            } catch (e) {
                done(e)
            } 
        })
    });

    it('should return an error if the user of the comment does not exist in the database', function (done) {

        req.body.commentUserId = 25;

        const fakeGetUser = sinon.fake.resolves(null);
        sinon.replace(User, 'findByPk', fakeGetUser);

        rules.commentUser(req, {}, () => {
            try {
                const errors = validationResult(req).array();
                expect(errors[0]).to.deep.equal({
                    value: 25,
                    msg: 'Ошибка. Отправитель комментария не зарегестрирован.',
                    param: 'commentUserId',
                    location: 'body'
                  });
                done();
            } catch (e) {
                done(e)
            } 
        })
    });

    //Comment Item

    it('should return no error if the item of the comment exists in the database', function (done) {
        req.body.commentItemId = 15;

        const fakeGetItem = sinon.fake.resolves({id: 25, title: '3060ti'});
        sinon.replace(Item, 'findByPk', fakeGetItem);

        rules.commentItem(req, {}, () => {
            try {
                const errors = validationResult(req).array();
                expect(errors).to.be.empty;
                done();
            } catch (e) {
                done(e)
            } 
        })
        
    });

    it('should return an error if the item of the comment is empty', function (done) {
        req.body.commentItemId = '';

        const fakeGetItem = sinon.fake.resolves(null);
        sinon.replace(Item, 'findByPk', fakeGetItem);

        rules.commentItem(req, {}, () => {
            try {
                const errors = validationResult(req).array();
                expect(errors[0]).to.deep.equal({
                    value: '',
                    msg: 'Ошибка. Обьект комментария не получен',
                    param: 'commentItemId',
                    location: 'body'
                  });
                done();
            } catch (e) {
                done(e)
            } 
        })
        
    });

    it('should return an error if the item of the comment does not exist in the database', function (done) {
        req.body.commentItemId = 46;

        const fakeGetItem = sinon.fake.resolves(null);
        sinon.replace(Item, 'findByPk', fakeGetItem);

        rules.commentItem(req, {}, () => {
            try {
                const errors = validationResult(req).array();
                expect(errors[0]).to.deep.equal({
                    value: 46,
                    msg: 'Ошибка. Товар комментария не существует в базе данных',
                    param: 'commentItemId',
                    location: 'body'
                  });
                done();
            } catch (e) {
                done(e)
            } 
        })
        
    });
})