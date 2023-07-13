const {Configuration, OpenAIApi} = require("openai")
require('dotenv').config()

async function sendRequest(requestInfo){
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

const response = await openai.createChatCompletion(requestInfo)
return response.data.choices[0].message
}

module.exports = sendRequest