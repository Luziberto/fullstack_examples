var express = require('express');
var router = express.Router();
var mongoController = require('../controllers/mongo')

/* GET users listing. */
router.get('/', mongoController.listData);
router.post('/', mongoController.insertData);
router.put('/:id', mongoController.updateData);
router.get('/:id', mongoController.deleteData);
module.exports = router;
