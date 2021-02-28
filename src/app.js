const express = require('express')
require('./dataBase/mongoose')
const User = require('./models/user')
const Project = require('./models/project')
const Task = require('./models/task')
const projectRouter = require('./routes/project/index')
const taskRouter = require('./routes/task/index')
const userRouter = require('./routes/user/index')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(projectRouter)
app.use(taskRouter)

module.exports = app
