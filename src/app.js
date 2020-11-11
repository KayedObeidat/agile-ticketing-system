const express = require('express')
require('./dataBase/mongoose')
const User = require('./models/user')
const userRouter = require('./routes/user')


const app = express()
app.use(express.json())
app.use(userRouter)


module.exports = app
