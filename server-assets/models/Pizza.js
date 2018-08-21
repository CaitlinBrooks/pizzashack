let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'No Description Choose your own fate!'
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Pizza', schema)