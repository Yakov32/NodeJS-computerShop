const router = require('express').Router();

const {sendForm, registrate} = require('../controllers/RegistController');
const {rules} = require('../validators/user/rules');
const {validate} = require('./../validators');
const errorRender = require('./../validators/user/errorRender');

router.get('/', sendForm);

router.post('/', [rules(), validate, errorRender], registrate);


module.exports = router;