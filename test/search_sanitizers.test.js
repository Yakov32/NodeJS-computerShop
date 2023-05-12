'use strict';


const {expect} = require('chai');
const Category = require('./../models').Category;
const Company = require('./../models').Company;
const sanitizers = require('./../validators/search/sanitizers');
const sinon = require('sinon');

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

    it('should change req.query.search to "" if it is not a string', function (done) {
        
        req.query.search = undefined;
        sanitizers.search(req, {}, () => {
            expect(req.query.search).to.equal('');
            done();
        })
    }); 

    it('should change priceFrom to 0 if given value is not a number', function (done) {

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

    it('should change priceTo to 10000000 if given value is not a number', function (done) {

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

    it('should change req.query.sort to default sort string if it is a not string', function (done) {
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

    it('should change req.query.sort to default sort string if it is an invalid string', function (done) {
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

    //Categories tests
    it('should not change req.query.category if that category is in the database', function (done) {

        req.query.category = 'Видеокарты';
        const fakeCategories = sinon.fake.resolves([{title: 'Видеокарты'}, {title: 'Процессоры'}, {title: 'Мониторы'}]);
        sinon.replace(Category, "findAll", fakeCategories);
        sanitizers.category(req, {}, () => {
            try {
                expect(req.query.category).to.equal('Видеокарты');
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
            
        })
        
    })

    it('should set req.query.category an empty string if that is not in the database', function (done) {

        req.query.category = 'Оперативная память';
        const fakeCategories = sinon.fake.resolves([{title: 'Видеокарты'}, {title: 'Процессоры'}, {title: 'Мониторы'}]);
        sinon.replace(Category, "findAll", fakeCategories);
        sanitizers.category(req, {}, () => {
            try {
                expect(req.query.category).to.equal('');
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
            
        })
        
    })

    it('should set req.query.category an empty string if that is not a string', function (done) {
        req.query.category = 231;
        sanitizers.category(req, {}, () => {
            try {
                expect(req.query.category).to.equal('');
                done();
            } catch (e) {
                done(e);
            }
        })
    })

    //Companies tests
    it('should not change req.query.companies if every company in given arr is in the database', function (done) {
        
        req.query.companies = ['NVidia', 'AMD'];
        const fakeCompanies = sinon.fake.resolves([{title: 'NVidia'}, {title: 'AMD'}, {title: 'Intel'}]);
        sinon.replace(Company, 'findAll', fakeCompanies);
        sanitizers.companies(req, {}, () => {
            try {
                expect(req.query.companies).to.deep.equal(['NVidia', 'AMD']);
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
        })
    })

    it('should set to req.query.companies all companies from database if at least one company in given arr is does not exist', function (done) {
        
        req.query.companies = ['NVidia', 'AMD', 'Buasda31231'];
        const fakeCompanies = sinon.fake.resolves([{title: 'NVidia'}, {title: 'AMD'}, {title: 'Intel'}]);
        sinon.replace(Company, 'findAll', fakeCompanies);
        sanitizers.companies(req, {}, () => {
            try {
                expect(req.query.companies).to.deep.equal(['NVidia', 'AMD', 'Intel']);
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
        })
    })

    it('should set to req.query.companies all companies from the database if that is not array or empty array', function (done) {
        
        req.query.companies = 'asdasdad';
        const fakeCompanies = sinon.fake.resolves([{title: 'NVidia'}, {title: 'AMD'}, {title: 'Intel'}]);
        sinon.replace(Company, 'findAll', fakeCompanies);
        sanitizers.companies(req, {}, () => {
            try {
                expect(req.query.companies).to.deep.equal(['NVidia', 'AMD', 'Intel']);
                done();
            } catch (e) {
                done(e);
            } finally {
                sinon.restore();
            }
        })
    })
})