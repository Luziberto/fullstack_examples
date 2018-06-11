const app = require('./app')
const http = require('http')
const port = 3002

const server = http.createServer(app)
console.log("Servidor inicializado, porta:" + port)
server.listen(port)