const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Welcome')
})


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

