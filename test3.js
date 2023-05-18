
const axios=require('axios');





 async function store(text) {


try {
    const question=`What is the meaning of the word :${text}
    Format the entire response in JSON string.
    Here is the Example response:
    [
    {
      "word": "About",
      "meaning": {"mn1":"On the subject of"
      , "mn2":"connected with"],
      "example":{
        "ex1":"We talked about the problem.",
        "ex2":"I was about to leave when the phone rang."
      },
      "partsOfSpeech":{
        "pos1":"preposition",
        "pos2":"adverb"
      }

  },
  {
      "word": "Above",
      "meaning": {"mn1":"In or to a higher position than something else"
      , "mn2":"More than an amount or level",
      "example":{
        "ex1":"The birds were flying high above.",
        "ex2":"Temperatures will be above average for the time of year."
      },
      "partsOfSpeech":{
        "pos1":"preposition",
        "pos2":"adverb"
      }
  }
]
`





// const question="Hello?"





//aPi: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








    const url = 'http://127.0.0.1:5000/api/get_answer';
    const data = { question };
    const response = await axios.post(url, data);
    const responseString=response.data.answer;


    console.log(responseString)
    console.log(typeof responseString)
    
const start = responseString.indexOf("[");
const end = responseString.lastIndexOf("]") + 1;
const jsonString = responseString.substring(start, end);

console.log(jsonString)
console.log(typeof jsonString)

//create a variable and replace all .replace("\") with "" from jsonString
 const jsonString2=jsonString.replace(/\\/g, "");
  console.log(jsonString2)

const obj=JSON.parse(jsonString2)

console.log(obj)
console.log(typeof obj)


// console.log("helllo")
// const arr=jsonString.split(',')

// console.log(arr[0] )






      return true;

  } catch (error) {
    console.log(error);

    return false;
    
  }

}



store("Go")










// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);

// async function run(word) {


//     const prompt = `What is the meaning of the word :${word}
//     Format the entire response in JSON string.
//     Here is the Example response:
//     [
//     {
//       "word": "About",
//       "meaning": {"mn1":"On the subject of"
//       , "mn2":"connected with"],
//       "example":{
//         "ex1":"We talked about the problem.",
//         "ex2":"I was about to leave when the phone rang."
//       },
//       "partsOfSpeech":{
//         "pos1":"preposition",
//         "pos2":"adverb"
//       }

//   },
//   {
//       "word": "Above",
//       "meaning": {"mn1":"In or to a higher position than something else"
//       , "mn2":"More than an amount or level",
//       "example":{
//         "ex1":"The birds were flying high above.",
//         "ex2":"Temperatures will be above average for the time of year."
//       },
//       "partsOfSpeech":{
//         "pos1":"preposition",
//         "pos2":"adverb"
//       }
//   }
// ]

//     `
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: prompt,
//         temperature: 0,
//         max_tokens: 2024,
//     });

//     const result = JSON.parse(response.data.choices[0].text);
//     return result;
// }




// async function store(word) {
//   const result = await run(word);
//   console.log(result);
//   console.log(typeof result);
//   // console.log(result[0].day1)


// }


// store("About")