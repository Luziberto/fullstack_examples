const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'restapi'
})

const generic = require('./routes/generic')
const dependencies = {
    connection
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.options('*', cors());
app.use(cors());

app.use('/generic', generic(dependencies))

connection.connect(() => {
    app.listen(port, () => console.log('CRUD listening on port: '+ port))
})
