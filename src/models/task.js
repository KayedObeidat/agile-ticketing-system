const mongoose = require('mongoose')
const Project = require('./project')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task