
const axios=require('axios');





export default async function store(text) {

const firstWord = text.split(" ")[0];
// console.log(firstWord)



const prompt=`I want to know the meaning of the word ${firstWord} you should tell me the meaning of the word ,at least two examples also what parts of speech  that word is .I want you to answer me with a javaScript object.Here is  how you should answer : {
    word: "Above",
    meaning: ["Higher than", "More than"],
    example: ["The plane was flying above the clouds", "Temperatures will be above average for the time of year"],
    partsOfSpeech:"article"
}`

        
       
    

   
  try {


    const question=prompt;
    const url = 'http://127.0.0.1:5000/api/get_answer';
    const data = { question };
    const response = await axios.post(url, data);
    const sentence=response.data.answer;


    console.log(sentence)
    console.log(typeof sentence)

    // console.log(sentence)
//     const regex = /\{[\s\S]*\}/;
// const match = sentence.match(regex);
// console.log(typeof match[0])
// console.log( match[0])

// const newWords=  JSON.parse(match[0] );
// console.log(typeof newWords)

// console.log(newWords)

// localStorage.setItem("words",JSON.stringify(newWords))

      // return (match[0]);
      return true;

  } catch (error) {
    console.log(error.message);

    return false;
    
  }

}


