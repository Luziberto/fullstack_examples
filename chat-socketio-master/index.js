const express = require('express')
const app = express()
const http = require('http').Server(app)
const path = require('path')
const mongoose = require('mongoose')
const io = require('socket.io')(http)
const bodyParser = require('body-parser')
const session = require('express-session')
const sharedSession = require('express-socket.io-session')
mongoose.Promise = global.Promise
const Room = require('./models/room')
const Message = require('./models/message')
const redis = require('socket.io-redis')
const port = process.env.PORT || 3000


//io.adapter(redis())
app.set('view engine', 'ejs')
app.use(express.static('public'))
const expressSession = session(
    {
        secret: 'socketio',
        cookie: {
            maxAge: 10*60*1000
        }
    }
)
app.use(expressSession)
io.use(sharedSession(expressSession, { autoSave: true}))
io.use((socket, next) => {
    const session = socket.handshake.session
    if(!(session.user)) {
        next(new Error('Auth failed'))
    } else {
        next()
    }
})
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded())
app.get('/', (req, res) => res.render('home'))
app.post('/', (req, res) => {
    req.session.user = {
        name: req.body.name
    }
    res.redirect('/room')
})
app.get('/room', (req, res) => { 
    if(!req.session.user) {
        res.redirect('/')
    } else {
        res.render('room', {
            name: req.session.name 
        })
    }
    
})

io.on('connection', socket => {
    //initial rooms
    Room.find({}, (err, rooms) => {
        socket.emit('roomList', rooms)
    })
    // addRoom
    socket.on('addRoom', roomName => {
        const room = new Room({
            name: roomName
        })
        room.save().then(() => {
            io.emit('newRoom', room)
        })
        console.log('addRoom', roomName)
    })
    //join na sala
    socket.on('join', roomId => {
        socket.join(roomId)
        Message.find({ room: roomId}).then((msgs) => {
            socket.emit('msgsList', msgs)
        })
    })
    socket.on('sendMsg', msg => {
        const message = new Message({
            author: socket.handshake.session.user.name,
            when: new Date(),
            msgType: 'text',
            message: msg.msg,
            room: msg.room
        })
        message.save().then(() => {
            io.to(msg.room).emit('newMsg', message)
        })
        //console.log(msg)
        //console.log(socket.handshake.session)
    })
    socket.on('sendAudio', msg => {
        const message = new Message({
            author: socket.handshake.session.user.name,
            when: new Date(),
            msgType: 'audio',
            message: msg.data,
            room: msg.room
        })
        message.save().then(() => {
            io.to(msg.room).emit('newAudio', message)
        })
        //console.log(msg)
        //console.log(socket.handshake.session)
    })
    socket.on('typing', msg => {
        io.to(msg.room).emit('typing', {
            author: socket.handshake.session.user.name,
            typing: msg.typing
        })
    })
    console.log()
})
mongoose.connect('mongodb://localhost/chat-socketio').then(()=>{
    http.listen(port, () => console.log('chat running', port))
})
