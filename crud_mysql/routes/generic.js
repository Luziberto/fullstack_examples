const express = require('express')
const genericController = require('../controllers/generic')

const genericRouter = ( { connection }) => {
    const router = express.Router()
    router.get('/', genericController.index.bind(null, connection))
    router.get('/detail/:id', genericController.detail.bind(null, connection))
    router.post('/updatePerson/:id', genericController.updatePerson.bind(null, connection))
    router.get('/deletePerson/:id', genericController.deletePerson.bind(null, connection))
    router.get('/newPerson', genericController.newPerson.bind(null, connection))
    router.post('/insertPerson', genericController.insertPerson.bind(null, connection))
    router.post('/uploadFile', genericController.uploadFile.bind(null, connection))     
    return router
}

module.exports = genericRouter