// Return randomly rock, paper, or scissors.
let result;
function getComputerChoice(min, max) {
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
getComputerChoice();

let userChoice = prompt("Choose rock, paper, or scissors")
// console.log(userChoice);

 if (result == 1 && userChoice == "rock") {
    console.log("It's a tie!");
 } else if (result == 1 && userChoice == "paper") {
    console.log("Paper beats rock, you win!");
 } else if (result == 1 && userChoice == "scissors") {
    console.log ("Rock beats scissors so you lose!!");
 } else if (result == 2 && userChoice == "rock") {
    console.log("Paper beats rock so you lose!!");
 } else if (result == 2 && userChoice == "paper") {
    console.log("It's a tie!");
 } else if (result == 2 && userChoice == "scissors") {
    console.log("Scissors beats paper so you win!!");
 } else if (result == 3 && userChoice == "rock") {
    console.log("Rock beats scissors, you win!");
 } else if (result == 3 &&  userChoice == "paper") {
    console.log("Scissors beats paper so you win!");
 } else if (result == 3 && userChoice == "scissors") {
    console.log("It's a tie!");
 } else console.log("Enter a valid answer!")
 
  