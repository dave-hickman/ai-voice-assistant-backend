const sendRequest = require("../model/requestsModel")

const makeRequest = (req, res, next) => {
    const requestInfo = req.body
    sendRequest(requestInfo)
}

module.exports = makeRequest