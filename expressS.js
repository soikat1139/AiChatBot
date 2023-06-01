
// create a server with express which has a post route that receives a word and saves it to the database



const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// use core to prevent cors errors
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.post("/", async (req, res) => {

  const word = req.body.word;
 
console.log(req.body.word)

  try {
    await createWord(word);
    res.status(200).send("Word created successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }

  // res.status(200).send("Word created successfully");
});

async function createWord(word) {
  try {
    const wordCreator = await prisma.word.create({
      data: {
        word: word.word,
        mn1: word.meaning.mn1,
        mn2: word.meaning?.mn2,
        ex1: word.example.ex1,
        ex2: word.example?.ex2,
        pos1: word.partsOfSpeech.pos1,
        pos2: word.partsOfSpeech?.pos2,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});



