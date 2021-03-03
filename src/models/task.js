const mongoose = require('mongoose')
const Project = require('./project')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        immutable: true
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        required: true,     
    },
    creator:{
        type: String,
        required: true,
        immutable: true
    },
    assignee: {
        type: String,
    }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task