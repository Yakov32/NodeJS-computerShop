'use strict';

const router = require('express').Router();
const {createOrDelete} = require('./../controllers/LikeController');

router.post('/create', createOrDelete);

module.exports = router;