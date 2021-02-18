const mongoose = require('mongoose')
const User = require('./user')
const Task = require('./task')

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

// projectSchema.virtual('tasks', {
//     ref: 'Task',
//     localField: '_id',
//     foreignField: 'owner'
// })

// projectSchema.pre('remove', async function(next){
//     const project = this
//     await Task.deleteMany({owner: project._id})
//     next()
// })

const Project = mongoose.model('Project', projectSchema)

module.exports = Project