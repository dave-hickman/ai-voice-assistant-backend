const {Configuration, OpenAIApi} = require("openai")
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

async function getAssistant(request){
    console.log(request)
    const response = await openai.createChatCompletion(request)
    return response
}

module.exports = getAssistant