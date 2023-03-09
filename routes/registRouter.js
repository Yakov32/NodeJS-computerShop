const router = require('express').Router();

const {sendForm, registrate} = require('../controllers/RegistController');

router.get('/', sendForm);

router.post('/', registrate);


module.exports = router;