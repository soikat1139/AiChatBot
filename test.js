const axios=require('axios');


async function answer(quest){


  const prompt=`I want to know the meaning of the word ${quest} you should tell me the meaning of the word ,at least two examples also what parts of speech  that word is .I want you to answer me with a javaScript object.Here is  how you should answer : {
    word: "Above",
    meaning: ["Higher than", "More than"],
    example: ["The plane was flying above the clouds", "Temperatures will be above average for the time of year"],
    partsOfSpeech:"article"
}`




    try{
        const question=prompt;


        const url = 'http://127.0.0.1:5000/api/get_answer';
        const data = { question };
        
        const response = await axios.post(url, data);

        const sentence=response.data.answer;

        console.log(sentence)



        const regex = /\{[\s\S]*\}/;
const match = sentence.match(regex);

          return (match[0]);
    }
    catch (error) {
        return (error);
      }

}

// answer("friend").then((res)=>console.log(res)
// ).catch((err)=>console.log(err))


// const axios=require('axios');


// async function answer(quest){
//     try{
//         const question=quest;


//         const url = 'http://127.0.0.1:5000/ask';
//         const data = {prompt: question };
        
//         const response = await axios.get(url, data);
//           return (response);
//     }
//     catch (error) {
//         return (error.message);
//       }

// }



// const prompt=`I want to know the meaning of the word ${firstWord} you should tell me the meaning of the word ,at least two examples also what parts of speech  that word is .I want you to answer me with a javaScript object.Here is  how you should answer : {
//   word: "Above",
//   meaning: ["Higher than", "More than"],
//   example: ["The plane was flying above the clouds", "Temperatures will be above average for the time of year"],
//   partsOfSpeech:"article"
// }`

// answer("Hello").then((res)=>console.log(res)
// ).catch((err)=>console.log(err))










// const axios=require('axios');






// async function store(text) {

// const firstWord = text.split(" ")[0];












// const prompt=`I want to know the meaning of the word ${firstWord} you should tell me the meaning of the word ,at least two examples also what parts of speech  that word is .I want you to answer me with a javaScript object.Here is  how you should answer : {
//     word: "Above",
//     meaning: ["Higher than", "More than"],
//     example: ["The plane was flying above the clouds", "Temperatures will be above average for the time of year"],
//     partsOfSpeech:"article"
// }`

        
// const url = 'http://127.0.0.1:5000/api/get_answer';
// const data = { prompt };
    

   
//   try {
//     const res =  await axios.post(url, data);

//     console.log(res.data.answer);
// //     const startIndex = res.data.indexOf("{");
// // const endIndex = res.data.lastIndexOf("}") + 1;
// // const objectString = res.data.substring(startIndex, endIndex);
// // const object = JSON.parse(objectString);
// // console.log(object);
    

//   } catch (error) {
//     console.log(error.message);

//     return false;
    
//   }

// }


// store("Love")




// const str = `Here's the JavaScript object for the word "Love":

// {
//   word: "Love",
//   meaning: ["An intense feeling of deep affection", "A great interest and pleasure in something"],
//   example: ["She felt a deep love for her family", "He had a love for music since he was young"],
//   partsOfSpeech: "noun"
// }`;

// const regex = /\{[\s\S]*\}/;
// const match = str.match(regex);

// console.log(match[0]);