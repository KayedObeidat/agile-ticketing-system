const express = require('express')
require('./dataBase/mongoose')
const User = require('./models/user')
const Project = require('./models/project')
const Task = require('./models/task')
const userRouter = require('./routes/user')
const projectRouter = require('./routes/project')
const taskProject = require('./routes/task/index')


const app = express()
app.use(express.json())
app.use(userRouter)
app.use(projectRouter)
app.use(taskProject)

module.exports = app
