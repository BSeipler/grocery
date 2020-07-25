require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const mongoDb = require('./utils/database')
const itemRoute = require('./routes/itemRoute')

const app = express()

app.use(helmet())
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/items', itemRoute)
const port = process.env.PORT || 8265

app.listen(port, () => {
  mongoDb()
  console.log(`Listening on port ${port}`)
})
