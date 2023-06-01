const{ PrismaClient }=require('@prisma/client')
const prisma = new PrismaClient();


export default async function HandleRequest(req, res) {
   const word=req.body.word;
try{
    
    const allWords = await prisma.word.findMany()   

    const modified= allWords.map((word)=>{
        return {
            word: word.word,
            meaning:{
                mn1: word.mn1,
                mn2: word?.mn2
            },
            example:{
                ex1: word.ex1,
                ex2: word?.ex2
            },
            partsOfSpeech:{
                pos1: word.pos1,
                pos2: word?.pos2
            }
        }
  
        })
    res.status(200).send(modified);

}
catch (error) {
    res.status(500).send(error.message);
  }






}
