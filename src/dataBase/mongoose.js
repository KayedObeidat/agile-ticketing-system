const mongodb = require('mongodb')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/agile-ticketing-system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
