const router = require('express').Router();

const categoryRouter = require('./categoryRouter');
const itemRouter = require('./itemRouter');

router.get('/', (req, res) => {
   res.render('index.ejs');
})

router.use('/categories', categoryRouter);
router.use('/items', itemRouter);


module.exports = router;