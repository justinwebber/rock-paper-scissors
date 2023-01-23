// Return randomly rock, paper, or scissors.
function getComputerChoice(min, max) {
    let result = Math.floor(Math.random() * (1 * 3) + 1)
    // console.log(result)

    if (result === 1) {
        let computerChoice = "rock"
        console.log(computerChoice)
        return computerChoice;
    } else if (result === 2) {
        let computerChoice = "paper"
        console.log(computerChoice)
        return computerChoice;
    } else {
        let computerChoice = "scissors"
        console.log(computerChoice)
        return computerChoice;
    }
}
getComputerChoice();