const express = require('express')
require('./dataBase/mongoose')
const User = require('./models/user')
const userRouter = require('./routes/user')

const port = process.env.PORT


app.get('/', (req, res) => {
    res.send('Welcome')
})


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})


