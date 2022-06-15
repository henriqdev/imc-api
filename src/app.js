const express = require("express")
const app = express()
// const cors = require('cors')

// app.use(cors())
app.use(express.json())
require('./routes/routing.js').app(app)

module.exports = app
