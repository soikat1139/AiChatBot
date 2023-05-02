import axios from 'axios';

import Bot2 from "./Components/bot2"


// export async function getServerSideProps() {
//   try{
//     const response = await axios.post('http://localhost:3000/api/server1',{
//       question:"What is the meaning of life?"
//     });
  
//     const data = response.data;
//     return {
//       props: { data },
//     };
//   }
//   catch(err){
//     console.log(err);
//   }

 
// }




export default function Home() {

  
  
  return (
    <>
      <h1>Home</h1>
     
      <Bot2/>
     
    </>
  );
}
