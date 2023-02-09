const router = require('express').Router();

const {items} = require('./../controllers/itemController');




router.get('/', items)
module.exports = router;