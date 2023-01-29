// Return randomly rock, paper, or scissors.
// let result;
// let userChoice;
function getComputerChoice() {
    result = Math.floor(Math.random() * 3) + 1
    // console.log(result)

    if (result === 1) {
        let computerChoice = "rock"
        console.log("Computer chose "  + computerChoice)
        return computerChoice;
    } else if (result === 2) {
        let computerChoice = "paper"
        console.log("Computer chose "  + computerChoice)
        return computerChoice;
    } else {
        let computerChoice = "scissors"
        console.log("Computer chose "  + computerChoice)
        return computerChoice;
    }
}

function playerSelection() {
  userChoice = prompt("Choose rock, paper, or scissors")
  return userChoice;
}

// let winCount = 0;
// let loseCount = 0;

function playRound() {
   getComputerChoice();
   playerSelection();

   let winCount = 0;
   let loseCount = 0;

   if (result == 1 && userChoice == "rock") {
      console.log("It's a tie!");
   } else if (result == 1 && userChoice == "paper") {
      console.log("Paper beats rock, you win!");
      ++winCount;
   } else if (result == 1 && userChoice == "scissors") {
      console.log ("Rock beats scissors so you lose!!");
      ++loseCount;
   } else if (result == 2 && userChoice == "rock") {
      console.log("Paper beats rock so you lose!!");
      ++loseCount;
   } else if (result == 2 && userChoice == "paper") {
      console.log("It's a tie!");
   } else if (result == 2 && userChoice == "scissors") {
      console.log("Scissors beats paper so you win!!");
      ++winCount;
   } else if (result == 3 && userChoice == "rock") {
      console.log("Rock beats scissors, you win!");
      ++winCount;
   } else if (result == 3 &&  userChoice == "paper") {
      console.log("Scissors beats paper so you lose!");
      ++loseCount;
   } else if (result == 3 && userChoice == "scissors") {
      console.log("It's a tie!");
   } else console.log("Enter a valid answer!")

   console.log(winCount + " wins!");
   console.log(loseCount + " loses!");

   if (winCount == 5) {
      console.log("You won the game!");
      // break;
   } else if (loseCount == 5) {
      console.log("Game Over, You Lose!");
      // break;
   } else playRound();
}

playRound();
