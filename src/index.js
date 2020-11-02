const express = require('express')
require('./dataBase/mongoose')

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Welcome')
})


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

