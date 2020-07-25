const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  reorder: {
    type: Boolean,
    default: true,
    required: true
  }
})

module.exports = mongoose.model('Item', itemSchema)
