const router = require('express').Router();

const itemRouter = require('./itemRouter');
const registRouter = require('./registRouter');
const authRouter = require('./authRouter');
const profileRouter = require('./profileRouter');
const commentRouter = require('./commentRoute');
const likeRouter = require('./likeRouter');
const {checkUser, alreadyAuthorized} = require('./../middleware/authorization');

const {index} = require('./../controllers/IndexController');

router.get('/', checkUser, index);

router.use('/items', checkUser, itemRouter);
router.use('/regist', alreadyAuthorized, registRouter);
router.use('/auth', alreadyAuthorized, authRouter);
router.use('/profile', profileRouter);
router.use('/comments', checkUser, commentRouter);
router.use('/likes', likeRouter);


module.exports = router;