var axios = require('axios')
var io = require('socket.io').listen(3000)
console.log('socket.io rodando na porta: 3000')

var cont = 0

io.sockets.on ('connection', function (socket) {
    cont++
    console.log ('Quantidade de conexoes: ' + cont)
    io.sockets.emit ('usuariosConectados', cont)

    socket.on('disconnect', function(){
        console.log('Desconectado')
        cont--
        io.sockets.emit('usuariosConectados', cont)
    })

    socket.on ('enviarMensagem', function () {
        console.log('Enviar mensagem')
        io.sockets.emit('enviarMensagem')  
        axios.get('http://localhost:3001/mensagem/enviarMensagem')
        .then(function (response) {
            console.log(response)
            alert(1)
        })
        .catch(function (error) {
            console.log(error)
        })      
    })

    socket.on ('listarMensagem', function (callback) {
        console.log('Listar mensagem')
        io.sockets.emit('listarMensagem')  
        axios.get('http://localhost:3001/mensagem/listarMensagem')
        .then(function (response) {
            a = response.data
            callback(a)
        })
        .catch(function (error) {
            console.log(error)
        }) 
    })
})