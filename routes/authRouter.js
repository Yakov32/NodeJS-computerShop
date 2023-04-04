'use strict';

const router = require('express').Router();
const {sendForm, auth, logout} = require('../controllers/AuthController');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./../models').User;
const bcrypt = require('bcrypt');
const {checkUser, alreadyAuthorized} = require('./../middleware/authorization');


router.get('/', alreadyAuthorized, sendForm);


const strategy = new LocalStrategy(
    { passReqToCallback: true }, 
    function (req, email, password, cb) {
        //Made to avoid cluster of the sasme messages
        req.session.messages = [];
        
        User.findOne({where: {email: email}}).then((user) => {
            if(!user) {
                return cb(null, false, {message: 'Пользователя с такой почтой не существует.'})
            }

            bcrypt.compare(password, user.password).then((res) => {
                if(!res) {
                    return cb(null, false, {message: 'Неправильный пароль.'})
                }
                return cb(null, user);
            }).catch(err => cb(err));
        }).catch(err => cb(err));
    }
)
passport.use('local', strategy);

passport.serializeUser(function(user, cb){
    process.nextTick(function() {
        return cb(null, {
            id: user.id,
            name: user.email,
            password: user.password,
            avatar: user.imgPath,
            isAdmin: user.isAdmin, 
        })
    })
});

passport.deserializeUser(function (user, cb){
    process.nextTick(function () {
        return cb(null, user);
    })
});

router.post('/', alreadyAuthorized, passport.authenticate('local', {failureRedirect: '/auth', failureMessage: true}), auth);

router.get('/logout', checkUser, logout);

module.exports = router;