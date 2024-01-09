// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/mongoose-weather").catch((err)=> console.log(err))



app.use(express.json())
app.use('/', api)


const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})