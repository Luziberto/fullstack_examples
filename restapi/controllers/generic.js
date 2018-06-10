const generic = require('../models/generic')
const dh = require('./dh')
const file = require('./file')

const listAll = async(connection, req, res) => {
    const params = {
        pageSize: req.query.pageSize || 10,
        currentPage: req.query.page || 0
    }
    try {
        const results = await generic.listAll(connection, params)
        res.status(200).send(results)
    } catch (err) {
        res.status(400).send(file.write(dh.currentDate, dh.week[dh.day], dh.currentHours, err))
    } 
}
const listId = async(connection, req, res) => {
    try {
        const results = await generic.listId(connection, req.params.id)
        res.status(200).send(results)
    } catch (err) {
        res.status(400).send(file.write(dh.currentDate, dh.week[dh.day], dh.currentHours, err))
    } 
}
const deleteId = async(connection, req, res) => {
    try {
        const results = await generic.deleteId(connection, req.params.id)
        res.status(200).send(results)
    } catch (err) {
        res.status(400).send(file.write(dh.currentDate, dh.week[dh.day], dh.currentHours, err))
    } 
}
const updateId = async(connection, req, res) => {
    try {
        const results = await generic.updateId(connection, req.params.id, req.body)
        res.status(200).send(results)
    } catch (err) {
        res.status(400).send(file.write(dh.currentDate, dh.week[dh.day], dh.currentHours, err))
    } 
}
const create = async(connection, req, res) => {
    try {
        const results = await generic.create(connection, req.body)
        res.status(200).send(results)
    } catch (err) {
        res.status(400).send(file.write(dh.currentDate, dh.week[dh.day], dh.currentHours, err))
    } 
}

module.exports = {
    listAll, 
    listId,
    deleteId,
    updateId,
    create
}