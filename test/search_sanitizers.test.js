'use strict';

const {expect} = require('chai');
const {body, validationResult} = require('express-validator');
const sanitizers = require('./../validators/search/sanitizers')

describe('Search sanitizers', function () {

    let req = {};

    before(function() {
        req = {
            query: {
              search: '',
              priceFrom: '',
              priceTo: '',
              category: '',
              companies: ''
            }
        }
    })
    
    afterEach(function() {
        req = {
            query: {
              search: '',
              priceFrom: '',
              priceTo: '',
              category: '',
              companies: ''
            }
        }
    }) 

    it('should change search string if it is falsy value', function (done) {
        
        req.query.search = undefined;
        sanitizers.search(req, {}, () => {
            expect(req.query.search).to.equal('');
            done();
        })
    }); 

    it('should change priceFrom if it is not number', function (done) {

        req.query.priceFrom = 'asdasd';
        sanitizers.priceFrom(req, {}, () => {
        try {
            expect(req.query.priceFrom).to.equal(0);
            done();
        } catch (e) {
            done(e)
        }    
        })

    });

    it('should change priceTo if it is not number', function (done) {

        req.query.priceTo = 'sad213s';
        sanitizers.priceTo(req, {}, () => {
        try {
            expect(req.query.priceTo).to.equal(100000000);
            done();
        } catch (e) {
            done(e)
        }    
        })
    });

    it('should return default sort string if it is a not string', function (done) {
        req.query.sort = 512;
        sanitizers.sort(req, {}, () => {
            try {
                expect(req.query.sort).to.equal('price-ASC')
                done()
            } catch (e) {
              done(e);  
            }
        })
    });

    it('should return default sort string if it is an invalid string', function (done) {
        req.query.sort = 'asdasdasdasdaaboba';
        sanitizers.sort(req, {}, () => {
            try {
                expect(req.query.sort).to.equal('price-ASC')
                done()
            } catch (e) {
              done(e);  
            }
        })
    });

    it('should return companies')

    it('should return right category')
})