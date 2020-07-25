const mongoose = require('mongoose')

const mongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CREDENTIALS, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB Connected...')
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = mongoDb
