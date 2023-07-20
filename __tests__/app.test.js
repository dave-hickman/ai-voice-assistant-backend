const app = require("../app");
const request = require("supertest");

describe("POST /api/content/", () => {
  it("should return an object with requested properties", () => {
    const newRequest = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "what country is Paris in?",
        },
        {
          role: "assistant",
          content: "Paris is in France.",
        },
        {
          role: "user",
          content: "and what can you tell me about Paris?",
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };
    return request(app)
    .post("/api/content/")
    .send(newRequest)
    .expect(201)
    .then((response) => {
        expect(response.role).toBe("assistant");
        expect(typeof response.content).toBe('string')
    })
  });
});

describe.only('POST /api/speech/', () => {
  it('should return an object with requested properties', () => {
    const newRequest = {
      input: {text: "hello, world"},
      voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
      audioConfig: {audioEncoding: 'MP3'}
    }
    return request(app)
    .post("/api/speech/")
    .send(newRequest)
    .expect(201)
    .then((response) => {
      expect(typeof response.res.text).toBe('string')
    })
  });
});