// const{ PrismaClient }=require('@prisma/client')
// const prisma = new PrismaClient();


// export default async function createWord(word){
//   const wordCreator = await prisma.word.create({
//       data:{
//           word: word.word,
//           mn1: word.meaning.mn1,
//           mn2: word.meaning.mn2,
//           ex1: word.example.ex1,
//           ex2: word.example.ex2,
//           pos1: word.partsOfSpeech.pos1,
//           pos2: word.partsOfSpeech.pos2
//       }
//   })
//   console.log(wordCreator)
// }



// export async function main() {

//     // ... you will write your Prisma Client queries here
//     const allWords = await prisma.word.findMany()   
//     // console.log(allWords)
  
//   return allWords
//   }