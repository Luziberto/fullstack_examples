const express = require('express')
const router = express.Router()
const mensagemController = require('../controllers/mensagem-controller')

//get, post, delete, update, etc...
router.get('/enviarMensagem', mensagemController.enviarMensagem)
router.delete('/excluirMensagem/:idMensagem', mensagemController.excluirMensagem)
router.get('/listarMensagem', mensagemController.listarMensagem)


module.exports = router;