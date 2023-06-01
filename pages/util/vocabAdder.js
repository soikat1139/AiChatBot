const axios=require('axios');

export default async function store(text) {




  const firstWord = text.split(" ")[0];


  try {
    const question=`What is the meaning of the word :${firstWord}
    give me the meaning of the word ,meaning , atleast two examples and the parts of speech of the word ${firstWord} .You should follow the format value to answer
    ''''''''''''''''''''''
    
    {
      "word": "About",
      "meaning": {"mn1":"On the subject of"
      , "mn2":"connected with"},
      "example":{
        "ex1":"We talked about the problem.",
        "ex2":"I was about to leave when the phone rang."
      },
      "partsOfSpeech":{
        "pos1":"preposition",
        "pos2":"adverb"
      }

  }
  ''''''''''''''''''
  {
    "word": "Manner",
    "meaning": {
      "mn1": "The way in which something is done or happens",
      "mn2": "Behavior that is polite or well-mannered"
    },
    "example": {
      "ex1": "He always speaks in a calm and courteous manner.",
      "ex2": "She greeted her guests with impeccable manners."
    },
    "partsOfSpeech": {
      "pos1": "noun"
    }
  }
  '''''''''''''''''''
  {
    "word": "Involve",
    "meaning": {
      "mn1": "To include or have as a necessary component or result",
      "mn2": "To engage or participate in"
    },
    "example": {
      "ex1": "The project will involve a lot of teamwork.",
      "ex2": "I don't want to involve my family in this matter."
    },
    "partsOfSpeech": {
      "pos1": "verb"
    }
  }

'''''''''''''''''''''
`


    const url = 'http://127.0.0.1:5000/api/get_answer';
    const data = { question };
   
    const response = await axios.post(url, data);
    const responseString=response.data.answer;

    console.log(responseString);

let jsonString;
  

  const start = responseString.indexOf("{");
const end = responseString.lastIndexOf("}") + 1;
 jsonString = responseString.substring(start, end);




// //create a variable and replace all .replace("\") with "" from jsonString
 const jsonString2=jsonString.replace(/\\/g, "");


 
 

const obj=JSON.parse(jsonString2)

console.log(obj)
// console.log(obj.word)
// console.log(typeof obj)
// console.log(obj.meaning.mn1)


if(typeof obj==="object"){
  return obj;
}
else{
  return null;
}

  } catch (error) {
    console.log(error);     
  }

}






















