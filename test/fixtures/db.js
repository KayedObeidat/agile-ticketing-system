const mongoose = require('mongoose')
const User = require('../../src/models/user')


const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Wajeeh',
    email: 'wajeeh@example.com',
    password: 'w@jeeh!!!',
    age: 55
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Kayed',
    email: 'kayed@example.com',
    password: 'K@yed!!!',
    age:20
}


const setupDatabase = async () => {
    await User.deleteMany() 
    await new User(userOne).save() 
    await new User(userTwo).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    setupDatabase
}