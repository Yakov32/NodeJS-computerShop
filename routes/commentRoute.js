'use strict';

const router = require('express').Router();
const {create} = require('./../controllers/CommentController');
const {commentText, commentUser, commentItem} = require('./../validators/comment/rules');
const errorHandler = require('./../validators/comment/errorHandler');
const {validate} = require('./../validators');

router.post('/create', [[commentText, commentUser, commentItem], validate, errorHandler], create)

module.exports = router;