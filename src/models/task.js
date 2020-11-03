const mongoose = require('mongoose')
const Project = require('./project')
const validator = require('validator')

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
    status: {
        type: String,
        required: true,
        validate(value){
            if(value>100 || value<0){
                throw new Error('Please enter your task progress out of 100')
            }
        }
        
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    },
    isReporter:{
        type: Boolean,
        required:true
    },
    isCreator:{
        type: Boolean,
        required:true
    }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task