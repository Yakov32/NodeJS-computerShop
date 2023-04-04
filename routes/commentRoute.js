'use strict';

const router = require('express').Router();
const {create} = require('./../controllers/CommentController');
const rules = require('./../validators/comment/rules');
const errorHandler = require('./../validators/comment/errorHandler');
const {validate} = require('./../validators');

router.post('/create', [rules(), validate, errorHandler], create)

module.exports = router;