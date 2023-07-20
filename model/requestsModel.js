const {Configuration, OpenAIApi} = require("openai")
const textToSpeech = require("@google-cloud/text-to-speech")

const client = new textToSpeech.TextToSpeechClient()

require('dotenv').config()

async function sendRequest(requestInfo){
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

const response = await openai.createChatCompletion(requestInfo)
return response.audioContent
}

async function sendSpeech(request){
        const [response] = await client.synthesizeSpeech(request)
        const audioContent = response.audioContent.toString('base64')
        return audioContent
}


module.exports = {sendRequest, sendSpeech}