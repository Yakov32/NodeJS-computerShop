const router = require('express').Router();

const { getItems } = require('./../controllers/CategoryController');

router.get('/:id', getItems);

module.exports = router;