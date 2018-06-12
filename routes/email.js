var express = require('express');
var router = express.Router();
const emailController = require('../controllers/email')

/* GET users listing. */
router.get('/', emailController.montarEmail);
router.post('/', emailController.enviarEmail);

module.exports = router;
