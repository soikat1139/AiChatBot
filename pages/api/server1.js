const axios=require('axios');



export default async function HandleRequest(req, res) {

    
   console.log(req.body.question)

    
    
            // console.log(response.data.answer);

    try {
  
    //   const response = await new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve('Hello from server1');
    //     }, 1000);
    //   });

    const question=req.body.question;


    const url = 'http://127.0.0.1:5000/api/get_answer';
    const data = { question };

    const response = await axios.post(url, data);
      res.status(200).send(response.data.answer);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  