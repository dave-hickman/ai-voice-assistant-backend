const sendRequest = require("../model/requestsModel")

const makeRequest = (req, res, next) => {
    const requestInfo = req.body
    sendRequest(requestInfo)
    .then((response) => {
        res.status(201).send({response})
    })
}

module.exports = makeRequest