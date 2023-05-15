
const axios=require('axios');





export default async function store(text) {

const firstWord = text.split(" ")[0];
// console.log(firstWord)



const prompt=`I want to know the meaning of the word ${firstWord} you should tell me the meaning of the word .I want you to answer me with a javaScript object.Here is  how you should answer :
'''
<div>
<p>Word:Love</p>
<p>meaning:</p>
</div>

`

        
       
    

   
  try {


    const question=prompt;
    const url = 'http://127.0.0.1:5000/api/get_answer';
    const data = { question };
    const response = await axios.post(url, data);
    const responseString=response.data.answer;


    console.log("Hello1")
    
const start = responseString.indexOf("{");
const end = responseString.lastIndexOf("}") + 1;
const jsonString = responseString.substring(start+1, end-1);
console.log(jsonString)

console.log("Hello2")
const arr=jsonString.split(',')

console.log("Arr"+arr[0])





      return true;

  } catch (error) {
    console.log(error);

    return false;
    
  }

}



























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