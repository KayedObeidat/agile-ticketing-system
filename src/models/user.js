const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const Project = require('./project')
const Task = require('./task')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('You must provide an email address!')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Your password must not contain the string password!')
            }
        }
    },
    age: {
        type: Number,
        required: true,
        validate(value){
            if(value < 18){
                throw new Error('You have to be +18')
            }
        }
    }
})

// userSchema.virtual('tasks', {
//     ref: 'Task',
//     localField: '_id',
//     foreignField: 'owner'
// })

userSchema.pre('save', async function(next){
    const user = this

    if(user.isModified('password')) {  //to hash only the unhashed passwords
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

// userSchema.pre('remove', async function(next){
//     const user = this
//     await Project.deleteMany({owner: user._id})
//     next()
// }).pre('remove', async function(next){
//     const user = this
//     await Task.deleteMany({owner: user._id})
// })

const User = mongoose.model('User', userSchema)
module.exports = User