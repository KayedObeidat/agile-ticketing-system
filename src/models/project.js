const mongoose = require('mongoose')
const User = require('./user')

const projectSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: true
    }
})
const Project = mongoose.model('Project', projectSchema)

module.exports = Project