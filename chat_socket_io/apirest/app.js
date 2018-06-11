const connection = require('./connection')
const express = require('express')
const app = express();
const router = express.Router();

const mensagemRouter = require('./routes/mensagem-router')
app.use('/mensagem', mensagemRouter)

module.exports = app