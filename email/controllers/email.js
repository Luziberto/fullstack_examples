var nodemailer = require('nodemailer');

const montarEmail = async(req, res) => {
    res.render('email')
}

const enviarEmail = async(req, res) => {

    var transporter = nodemailer.createTransport({
        service: req.body.servico,
        auth: {
          user: req.body.emailR,
          pass: req.body.senha
        }
      });
      
      var mailOptions = {
        from: req.body.emailR,
        to: req.body.emailD,
        subject: req.body.assunto,
        text: req.body.mensagem
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    res.redirect('/email')
}

module.exports = {
    montarEmail,
    enviarEmail
}