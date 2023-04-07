const router = require('express').Router();

const itemRouter = require('./itemRouter');
const registRouter = require('./registRouter');
const authRouter = require('./authRouter');
const profileRouter = require('./profileRouter');
const commentRouter = require('./commentRoute');
const likeRouter = require('./likeRouter');
const {checkUser, alreadyAuthorized} = require('./../middleware/authorization');

const sanitizers = require('./../validators/search/sanitizers');
const {index} = require('./../controllers/IndexController');

router.get('/', checkUser, sanitizers(), index);

router.use('/items', checkUser, itemRouter);
router.use('/regist', alreadyAuthorized, registRouter);
router.use('/auth', authRouter);
router.use('/profile', profileRouter);
router.use('/comments', checkUser, commentRouter);
router.use('/likes', checkUser, likeRouter);

module.exports = router;