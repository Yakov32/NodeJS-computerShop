const router = require('express').Router();

const itemRouter = require('./itemRouter');
const registRouter = require('./registRouter');
const authRouter = require('./authRouter');
const {checkUser} = require('./../middleware/authorization');

const {index} = require('./../controllers/IndexController');

router.get('/', checkUser, index);

router.use('/items', checkUser, itemRouter);
router.use('/regist', registRouter);
router.use('/auth', authRouter);


module.exports = router;