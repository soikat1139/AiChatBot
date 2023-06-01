const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createWord(word) {
  try {
    const wordCreator = await prisma.word.create({
      data: {
        word: word.word,
        mn1: word.meaning.mn1,
        mn2: word.meaning.mn2,
        ex1: word.example.ex1,
        ex2: word.example.ex2,
        pos1: word.partsOfSpeech.pos1,
        pos2: word.partsOfSpeech.pos2,
      },
    });
  } catch (error) {
    throw new Error(`Error creating word: ${error.message}`);
  }
}

export default async function HandleRequest(req, res) {
  const word = req.body.word;
  console.log("From server " + word);
  try {
    await createWord(word);
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
}
