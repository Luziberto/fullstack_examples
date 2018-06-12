const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'restapi'
})

const generic = require(`./routes/generic`)
const dependencies = {
    connection
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }))
app.use(express.static('public'))

app.options('*', cors());
app.use(cors());

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//app.get('/', (req, res) => res.render('home'))
app.use('/', generic(dependencies))

connection.connect(() => {
    app.listen(port, () => console.log('Server listening on port: '+ port))
})
