const router = require('express').Router();

const categoryRouter = require('./categoryRouter');
const itemRouter = require('./itemRouter');

const {index} = require('./../controllers/IndexController');

router.get('/', index);

router.use('/categories', categoryRouter);
router.use('/items', itemRouter);


module.exports = router;