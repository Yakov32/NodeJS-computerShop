const router = require('express').Router();

const {items, item, itemAdd} = require('./../controllers/itemController');


router.get('/:id', item);

router.post('/add', itemAdd);

//router.get('/', items)
module.exports = router;