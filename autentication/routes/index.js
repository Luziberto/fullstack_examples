var express = require('express')
var router = express.Router()
const autenticationController = require('../controllers/autentication')

/* GET users listing. */
router.get('/', autenticationController.show)
router.post('/', autenticationController.login)
router.post('/', autenticationController.create)

module.exports = router