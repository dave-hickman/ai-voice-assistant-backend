const express = require('express')
const cors = require('cors')
const {makeRequest , makeSpeechRequest} = require('./controller/requestsController')

const app = express()

app.use(cors())

app.use(express.json())

app.post('/api/content/', makeRequest)

app.post('/api/speech/', makeSpeechRequest)

app.get('/api/', (req,res) => {
    res.send('Hey there')
})

app.use((err, req, res, next) => {
    if (err.status && err.msg) {
        res.status(err.status).send({err: err.msg})
    }
    else {
        res.status(500).send({msg: "Server Error"})
    }
})

app.use((req, res, next) => {
    res.status(404).send({msg: "Invalid request"})
});

module.exports = app