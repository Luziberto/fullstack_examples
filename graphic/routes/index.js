var express = require('express');
var router = express.Router();
const graphicController = require('../controllers/graphic')

/* GET users listing. */
router.get('/', graphicController.show)
router.get('/restart', graphicController.restart)
router.post('/', graphicController.insert)

module.exports = router;