const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require("../../src/models/task")
const Project = require("../../src/models/project")

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Wajeeh',
    email: 'wajeeh@example.com',
    password: 'w@jeeh!!!',
    age: 55
}

const taskOneId = mongoose.Types.ObjectId()
const taskOne = {
    _id: taskOneId,
    title: "Task thirteen",
    description: "No Desc",
    status: "In progress",
    creator: "Kayed",
    assignee: "Kayed"
}

const projectOneId = mongoose.Types.ObjectId()
const projectOne = {
    _id: projectOneId,
    title: "Project number one",
    completed: false
}


const setupDatabase = async () => {
    await User.deleteMany() 
    await Task.deleteMany()
    await Project.deleteMany()
    await new User(userOne).save() 
    await new Task(taskOne).save()
    await new Project(projectOne).save()
}



module.exports = {
    userOneId,
    userOne,
    taskOneId,
    taskOne,
    projectOne,
    projectOneId,
    setupDatabase
}