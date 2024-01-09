const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema  = new Schema({ 
    name:{type: String, unique: true} ,
    temperature : Number, 
    condition  : String,
    conditionpic : String 
  })

const City = mongoose.model("City", citySchema)
module.exports = City