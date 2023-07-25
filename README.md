# AI Voice Assistant

## Overview

This app allows you to use your voice to ask questions and receive a spoken reply from the AI Voice Assistant from an API call to OpenAI

Live Version:

[AI Voice Assistant](https://ai-voice-assistant-kappa.vercel.app/)

You can find my frontend repo [here](https://github.com/dave-hickman/ai-voice-assistant)

## Features

* Use your voice to ask anything you can think of.
* Receive a spoken answer.
* Ask follow up questions or request a new answer.


## Running this project locally


To run this project locally, you will need to fork this repo or fork as follows:
```
git clone https://github.com/dave-hickman/ai-voice-assistant-backend
cd AIVOICECHATBACKEND
```


## Setup

You will need to create an .env file and add a google-api JSON file to run this project locally. Into the .env file add :

```
OPENAI_API_KEY=<your_key_here>
GOOGLE_APPLICATION_CREDENTIALS=<path_to_json_file_here>
```


## Dependencies

* @google-cloud/text-to-speech
* cors
* dotenv
* express
* openai

## Dev Dependencies

* jest
* supertest
