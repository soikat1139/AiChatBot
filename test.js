const axios=require('axios');


async function answer(quest){
    try{
        const question=quest;


        const url = 'http://127.0.0.1:5000/api/get_answer';
        const data = { question };
        
        const response = await axios.post(url, data);
          return (response.data.answer);
    }
    catch (error) {
        return (error.message);
      }

}

answer("").then((res)=>console.log(res)
).catch((err)=>console.log(err))


// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const player1 = "Soikat";
// const player2 = "GPT";
// let currentPlayer = player1;
// let moves = [];
// let winnerArrays = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// function printBoard(board) {
//   console.log(
//     ` ${board[0]|| 'esp' } | ${board[1] || "esp"} | ${board[2]|| "esp"} \n-----------\n ${board[3]||  "esp"} | ${board[4]||  "esp"} | ${board[5]|| "esp"} \n-----------\n ${board[6]|| "esp"} | ${board[7]||  "esp"} | ${board[8]||  "esp"} `
//   );
// }

// function checkWinner(moves, currentPlayer) {
//   let playerMoves = moves.filter((move) => move.player === currentPlayer);
//   console.log("Player moves: ", playerMoves)
//   let playerPositions = playerMoves.map((move) => move.position);
 
//   for (let i = 0; i < winnerArrays.length; i++) {
//     let [a, b, c] = winnerArrays[i];
//     if (
//       playerPositions.includes(a) &&
//       playerPositions.includes(b) &&
//       playerPositions.includes(c)
//     ) {
//       return currentPlayer;
//     }
//   }
//   return null;
// }

// function playMove(position) {
//   if (moves.some((move) => move.position === position)) {
//     console.log("Position already played, please choose another.");
//     return;
//   }
//   moves.push({ position, player: currentPlayer });
 
//   let winner = checkWinner(moves, currentPlayer);
//   if (winner) {
//     console.log(`Congratulations! ${currentPlayer} wins!`);
//     console.log("Winner arrays: ", winnerArrays);
//     console.log("Moves: ", moves);
//     rl.close();
//     return;
//   }
//   if (moves.length === 9) {
//     console.log("It's a tie!");
//     console.log("Winner arrays: ", winnerArrays);
//     console.log("Moves: ", moves);
//     rl.close();
//     return;
//   }
//   currentPlayer = currentPlayer === player1 ? player2 : player1;
//   printBoard(moves.map((move) => move.player || " "));
// }

// function startGame() {
//   console.log("Welcome to Tic Tac Toe!");
//   console.log("To play, enter a number from 0-8 to choose a position on the board.");
//   console.log("The board positions are as follows:");
//   console.log(" 0 | 1 | 2 \n-----------\n 3 | 4 | 5 \n-----------\n 6 | 7 | 8 ");
//   printBoard([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
//   rl.on("line", (input) => {
//     let position = parseInt(input.trim());
//     if (isNaN(position) || position < 0 || position > 8) {
//       console.log("Invalid input, please enter a number from 0-8.");
//       return;
//     }
//     playMove(position);
//   });
// }

// startGame();