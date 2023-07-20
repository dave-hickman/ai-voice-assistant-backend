const {sendRequest, sendSpeech} = require("../model/requestsModel")

const makeRequest = (req, res, next) => {
    const requestInfo = req.body
    sendRequest(requestInfo)
    .then((response) => {
        res.status(201).send({response})
    })
    .catch(next)
}

const makeSpeechRequest = (req, res, next) => {
    const speechInfo = req.body
    sendSpeech(speechInfo)
    .then((response) =>{
        res.status(201).send({response})
    })
    .catch(next)
}

module.exports = {makeRequest, makeSpeechRequest}