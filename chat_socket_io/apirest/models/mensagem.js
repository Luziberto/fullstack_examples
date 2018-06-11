const connection = require('../connection.js')

exports.enviarMensagem = async(mensagem, callback) => {
    return await connection.query('INSERT INTO mensagem (conteudo) VALUES (?)', ['Flisol Sobral 2018'], callback)
}

exports.excluirMensagem = async(idMensagem, callback) => {
    return await connection.query('DELETE FROM mensagem WHERE idMensagem = ?', [idMensagem], callback)
}

exports.listarMensagem = async(mensagem, callback) => {
    return await connection.query('SELECT * FROM mensagem', callback)
}