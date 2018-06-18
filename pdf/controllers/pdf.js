const fs = require('fs')
const pdf = require('html-pdf')

const index = async(req, res) => res.render('index')

const write = async(req, res) => {
    fs.writeFile("file.html", req.body.html, function(erro) {
        if(erro) throw erro     
        console.log("Arquivo salvo")
        var html = fs.readFileSync('file.html', 'utf8')
        var options = { format: 'Letter' }
    
        pdf.create(html, options).toFile('file.pdf', function(err, res) {
            if (err) return console.log(err)
            console.log('PDF salvo...')
        })
    }) 
    res.redirect('/')
} 
module.exports = {
    index,
    write
}