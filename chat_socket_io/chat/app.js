const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const indexRouter = require('./routes/index-router')
app.use('/', indexRouter)

module.exports = app