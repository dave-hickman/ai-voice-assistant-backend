const getAssistant =  require("../utils")
const {Configuration, OpenAIApi} = require("openai")
require('dotenv').config()

async function sendRequest(requestInfo){
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

const response = await openai.createChatCompletion(requestInfo)
console.log(response.data.choices[0].message)
}

module.exports = sendRequest