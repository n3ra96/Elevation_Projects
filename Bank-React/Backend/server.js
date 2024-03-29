// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')
const path = require('path')

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI||"mongodb://127.0.0.1:27017/mongoose-weather").catch((err)=> console.log(err))


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
app.use('/', api)


const PORT = 3200
app.listen(process.env.PORT || PORT, function () {
    console.log(`Running on port ${PORT}`)
})