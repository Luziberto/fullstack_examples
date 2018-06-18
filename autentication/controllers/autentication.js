const bcrypt = require('bcrypt')  
const passport = require('passport')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

const show = async(req, res) => {
    db.defaults({salario:[]}).write()
    db.set('settings.toggledOption', true).write()
    const results = await listAll()
    res.render('index', {
        results
    })
}

const create = async(req, res) => {
    db.defaults({salario:[]}).write()
    db.set('settings.toggledOption', true).write()
    db.get('users').push(
        {
            nome: req.body.user,
            salario: req.body.password
        }
    ).write()
    res.redirect('/')
}

const login = async(req, res) => {
    const n = db.get('users').find({ user: 'diego', password: '123'}).value()
    console.log(n)
}     

module.exports = {
    show,
    login,
    create
}