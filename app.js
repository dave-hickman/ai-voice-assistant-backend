const express = require('express')
const makeRequest = require('./controller/requestsController')
const app = express()

app.use(express.json())

app.post('/content', makeRequest)

module.exports = app