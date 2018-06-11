const Mensagem = require('../models/mensagem')

exports.enviarMensagem = async(req, res, next) => {
    try {
        await Mensagem.enviarMensagem(req, (err, result) => {
            res.status(200).send(result)
        })
    } catch (e) {
        res.status(500).send({mensagem: e})
    }
}

exports.excluirMensagem = async(req, res, next) => {
    try {
        await Mensagem.excluirMensagem(req.params.idMensagem, (err, result) => {
            res.status(200).send(result)
        })
    } catch (e) {
        res.status(500).send({mensagem: e})
    }
}

exports.listarMensagem = async(req, res, next) => {
    try {
        await Mensagem.listarMensagem(req, (err, result) => {
            res.status(200).send(result)
        })
    } catch (e) {
        res.status(500).send({mensagem: e})
    }
}