const router = require('express').Router();

const itemRouter = require('./itemRouter');
const registRouter = require('./registRouter');
const authRouter = require('./authRouter');

const {index} = require('./../controllers/IndexController');

router.get('/', index);

router.use('/items', itemRouter);
router.use('/regist', registRouter);
router.use('/auth', authRouter);


module.exports = router;