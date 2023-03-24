const router = require('express').Router();

const itemRouter = require('./itemRouter');
const registRouter = require('./registRouter');
const authRouter = require('./authRouter');
const auth = require('./../middleware/authorization');

const {index} = require('./../controllers/IndexController');

router.get('/', auth, index);

router.use('/items', auth, itemRouter);
router.use('/regist', registRouter);
router.use('/auth', authRouter);


module.exports = router;