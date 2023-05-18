import { Configuration, OpenAIApi } from "openai";

export default async function store(text) {
  const firstWord = text.split(" ")[0];

  const configuration = new Configuration({
    apiKey: 'YOUR_API_KEY',
  });
  const openai = new OpenAIApi(configuration);

  const prompt = `What is the meaning of the word: ${firstWord}
    Format the entire response in JSON string.
    Here is the Example response:
    [
      {
        "word": "About",
        "meaning": {"mn1": "On the subject of", "mn2": "connected with"},
        "example": {
          "ex1": "We talked about the problem.",
          "ex2": "I was about to leave when the phone rang."
        },
        "partsOfSpeech": {
          "pos1": "preposition",
          "pos2": "adverb"
        }
      },
      {
        "word": "Above",
        "meaning": {"mn1": "In or to a higher position than something else", "mn2": "More than an amount or level"},
        "example": {
          "ex1": "The birds were flying high above.",
          "ex2": "Temperatures will be above average for the time of year."
        },
        "partsOfSpeech": {
          "pos1": "preposition",
          "pos2": "adverb"
        }
      }
    ]`;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 2024,
  });

  console.log("Response:", response);

  const result = JSON.parse(response.data.choices[0].text);
  console.log("Parsed Result:", result);

  // localStorage.setItem("words", JSON.stringify(result[0]));

  return result;
}






















