const{ PrismaClient }=require('@prisma/client')
const prisma = new PrismaClient();


async function createWord(word){
  const wordCreator = await prisma.word.create({
      data:{
          word: word.word,
          mn1: word.meaning.mn1,
          mn2: word.meaning.mn2,
          ex1: word.example.ex1,
          ex2: word.example.ex2,
          pos1: word.partsOfSpeech.pos1,
          pos2: word.partsOfSpeech.pos2
      }
  })
  console.log(wordCreator)
}


createWord( {
  word: 'Make',
  meaning: {
    mn1: 'To bring something into existence or cause it to happen',
    mn2: 'To produce something by physical or mental effort'
  },
  example: {
    ex1: 'She was determined to make a success of the business.',
    ex2: 'He makes sculptures out of stone.'
  },
  partsOfSpeech: { pos1: 'verb', pos2: 'noun' }
} )

// async function main() {

//   // ... you will write your Prisma Client queries here
//   const allWords = await prisma.word.findMany()   
//   console.log(allWords)

// return allWords
// }

// main()

//   .then(async (allWords) => {
//      const modified= allWords.map((word)=>{
//       return {
//           word: word.word,
//           meaning:{
//               mn1: word.mn1,
//               mn2: word?.mn2
//           },
//           example:{
//               ex1: word.ex1,
//               ex2: word?.ex2
//           },
//           partsOfSpeech:{
//               pos1: word.pos1,
//               pos2: word?.pos2
//           }
//       }

//       })
//       console.log(modified)
//       console.log(modified[1].word)
//     await prisma.$disconnect()

//   })

//   .catch(async (e) => {

//     console.error(e.message)

//     await prisma.$disconnect()

//     process.exit(1)

//   })