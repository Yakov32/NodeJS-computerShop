'use strict';

const router = require('express').Router();
const {create} = require('./../controllers/CommentController');
const rules = require('./../validators/comment/rules');
const errorRender = require('./../validators/comment/errorRender');
const {validate} = require('./../validators');


router.post('/create', [rules(), validate, errorRender], create)

module.exports = router;