const router = require('express').Router();

const itemRouter = require('./itemRouter');

const {index} = require('./../controllers/IndexController');

router.get('/', index);

router.use('/items', itemRouter);


module.exports = router;