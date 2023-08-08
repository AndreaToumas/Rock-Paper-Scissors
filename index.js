console.log ("Hello!")

let options = ["rock", "paper", "scissors"];

//the function of the computer choice//

function getComputerChoice() {
        let choice = options[Math.floor(Math.random()*options.length)];
        return choice;
    }

//to get player choice

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        let choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue
        }
        let choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

//The function of checking who won//

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "Tie";
    }

    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")){
        return "Player";
    }

    else {
        return "Computer";
    }

}

//the function of what it shows when round is played //

function playRound(playerSelection, computerSelection) {
    let result = checkWinner(playerSelection, computerSelection)
    if (result == "Tie"){
        return "It's a Tie!"
    }

    else if (result == "Player"){
        return `Congratulations, you won! ${playerSelection} beats ${computerSelection}`
    }

    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

//playing the game to 5 and showing score

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!");
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++
        }
    }
    console.log("Game Over")
    if (scorePlayer > scoreComputer){
        console.log("Player is the winner!");
    }
    else if (scoreComputer > scorePlayer){
        console.log("Computer is the winner!");
    }
    else{
        console.log("We have a tie!")
    }
}

game()