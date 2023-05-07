'use strict';

const {expect} = require('chai');
const {validationResult} = require('express-validator');
const rules = require('./../validators/comment/rules');

describe('Validation of comment', function () {

    let req = {};

    before(function() {
        req = { body: {commentText: '', commentUser: '', commentItem: ''} };
    })
    
    afterEach(function() {
        req = { body: {commentText: '', commentUser: '', commentItem: ''} }
    }) 

    it('should return no error for valid commentText', function (done) {

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
    
    it('should return an error for invalid commentText', function (done) {

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
})