const generic = require('../models/generic')
const dh = require('./dh')
const file = require('./file')
const http = require('http');
const formidable = require('formidable');
const multer = require('multer')

const index = async(connection, req, res) => {
    const params = {
        pageSize: req.query.pageSize || 5,
        currentPage: req.query.page || 0
    }   
    try {
        const results = await generic.index(connection, params)
        res.status(200).render('generic/index', {
            results
        })
    } catch (err) {
        res.status(400).send(file.write(dh.currentDate, dh.week[dh.day], dh.currentHours, err))
    } 
}
const detail = async(connection, req, res) => {
    try {        
        const results = await generic.detail(connection, req.params.id)
        res.status(200).render('generic/detail', {
            results
        })
    } catch (err) {
        res.status(400).send(file.write(dh.currentDate, dh.week[dh.day], dh.currentHours, err))
    } 
}
const updatePerson = async(connection, req, res) => {
    try {        
        const results = await generic.updatePerson(connection, req.params.id, req.body)
        res.status(200).redirect(`/detail/${req.params.id}`)        
    } catch (err) {
        res.status(400).send(file.write(dh.currentDate, dh.week[dh.day], dh.currentHours, err))
    } 
}
const deletePerson = async(connection, req, res) => {
    try {        
        const results = await generic.deletePerson(connection, req.params.id)
        res.status(200).redirect(`/`)       
    } catch (err) {        
        res.status(400).send(file.write(dh.currentDate, dh.week[dh.day], dh.currentHours, err))
    } 
}
const newPerson = async(connection, req, res) => {
    res.render('generic/new')
}
const insertPerson = async(connection, req, res) => {
    try {
        const results = await generic.insertPerson(connection, req.body)
        res.status(200).redirect(`/newPerson`)
    } catch (err) {
        res.status(400).send(file.write(dh.currentDate, dh.week[dh.day], dh.currentHours, err))
    } 
}
const uploadFile = async(connection, req, res) => {
    res.render('generic/upload')     
} 

module.exports = {
    index, 
    detail,
    deletePerson,
    updatePerson,
    newPerson,
    insertPerson,
    uploadFile
}