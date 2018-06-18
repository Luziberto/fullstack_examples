const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fs = require('fs')

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

const insert = async(req, res) => {
    db.defaults({salario:[]}).write()
    db.set('settings.toggledOption', true).write()
    db.get('salario').push(
        {
            nome: req.body.nome,
            salario: req.body.salario
        }
    ).write()
    res.redirect('/')
}

const listAll = () => { 
    let rawdata = fs.readFileSync(`db.json`)  
    let data = JSON.parse(rawdata)
    console.log(data.salario)
    return data.salario    
}

const restart = async(req, res) => {
    fs.unlink('db.json', (err) => {
        if (err) return console.log(err)
        console.log('arquivo deletado')
    })
    fs.writeFile("db.json", "", function(erro) {
        if(erro) throw erro     
        console.log("Arquivo salvo");
    })
    res.redirect(`/`)
    
}
/*
db
.get('noticias')
.push(
  {
    id: '1',
    assunto: 'Crime',
    conteudo: 'teste'
  },
  {
    id: '2',
    assunto: 'Fotebol',
    conteudo: 'teste'
  },
  {
    id: '3',
    assunto: 'Novela',
    conteudo: 'teste'
  }
)
.write()


db.get('noticias')
.update({id:'1'})
.value({assunto:'SESI'})

const result = db
.get('noticias')
.find({ id: '1'})
.value()
console.log(result)
*/
module.exports = {
    show,
    insert,
    restart
}