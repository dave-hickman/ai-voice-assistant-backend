const getAssistant =  require("../utils")

const sendRequest = (requestInfo) => {
    const response = getAssistant(requestInfo)
    console.log(response)
}

module.exports = sendRequest