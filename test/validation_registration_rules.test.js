'use strict';

const {expect} = require('chai');
const assert = require('node:assert')
const {body, validationResult} = require('express-validator');
const {rules} = require('./../validators/user/rules');

describe('Validation', function () {

    describe('registration', function () {

        let req = {};

        before(function() {
            req = { body: {user_email: '', user_password: ''} };
        })
        
        afterEach(function() {
             req = { body: {email: '', user_password: ''} }
        }) 
        
        it('should return no errors for valid email', function (done) {
            req.body.user_email = 'yasha@gmail.com';

            rules.email(req, {}, () => {
                try {
                    const errors = validationResult(req).array();
                    expect(errors).to.be.empty;
                    done();
                } catch (e) {
                    done(e)
                }
                
            })
        });

        it('should return an error for an invalid email', function (done) {
            
            req.body.user_email = 'bubaduba312@gmail';
            rules.email(req, {}, () => {
                try {
                    const errors = validationResult(req).array();
                    expect(errors[0]).to.deep.equal({
                        value: 'bubaduba312@gmail',
                        msg: 'Некорректная почта',
                        param: 'user_email',
                        location: 'body'
                    })
                    done();
                } catch (e) {
                    done(e)
                }
                
            })
        });

        it('should return no error for valid password', function(done) {

            req.body.user_password = '1234';
            rules.password(req, {}, () => {
                try {
                   const errors = validationResult(req).array();
                   expect(errors[0]).to.deep.equal({
                    value: '1234',
                    msg: 'Пароль должен быть >= 6',
                    param: 'user_password',
                    location: 'body'
                })
                   done(); 
                } catch (e) {
                    done(e)
                }
            })
        })

        it('should return an error for invalid password', function(done) {

            req.body.user_password = '123456';
            rules.password(req, {}, () => {
                try {
                   const errors = validationResult(req).array();
                   expect(errors).to.be.empty;
                   done(); 
                } catch (e) {
                    done(e)
                }
            })
        })
    })
})