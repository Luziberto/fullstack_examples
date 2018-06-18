var express = require('express')
var router = express.Router()
const pdfController = require('../controllers/pdf')

/* GET users listing. */
router.get('/', pdfController.index)
router.post('/', pdfController.write)

module.exports = router