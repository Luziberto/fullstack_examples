var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'flisol'
})
connection.connect(error => {
    if (error) throw error
    console.log("Conectado!")
})
module.exports = connection