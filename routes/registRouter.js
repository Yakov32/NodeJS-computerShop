const router = require('express').Router();

const {sendForm, registrate} = require('../controllers/RegistController');
const {rules} = require('../validators/user/rules');
const {validate} = require('./../validators');
const errorHandler = require('./../validators/user/errorHandler');

router.get('/', sendForm);

router.post('/', [rules(), validate, errorHandler], registrate);

module.exports = router;