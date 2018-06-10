const express = require('express')
const genericController = require('../controllers/generic')

const genericRouter = ( { connection }) => {
    const router = express.Router()
    router.get('/listAll', genericController.listAll.bind(null, connection))
    router.get('/listId/:id', genericController.listId.bind(null, connection))
    router.delete('/deleteId/:id', genericController.deleteId.bind(null, connection))
    router.put('/updateId/:id', genericController.updateId.bind(null, connection))
    router.post('/create', genericController.create.bind(null, connection))
    return router
}

module.exports = genericRouter