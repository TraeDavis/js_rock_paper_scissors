// create variables for player score and computer score.
let playerScore = 0;
let compScore = 0;

const computerSelection = computerPlay();
const playerSelection = prompt("To start select rock, paper, or scissors:");

// Create a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay(){
    // create array to hold options
    let options = ['rock', 'paper', 'scissors'];
    // create random number between 0 and array length
    let randomPick = Math.floor(Math.random() * (options.length));
    // return value from array with random number
    return(options[randomPick]);
}

// create a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
        // (Side-Note)Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

function playRound(playerSelection, computerSelection){
    // make computerSelection and playerSelection lower-case
    const answer = playerSelection.toLowerCase();
    // if statements to test if player wins or loses.
    if (answer === 'rock' && computerSelection === 'paper'){
        compScore++;
        return("You Lose! Paper beats Rock.")
    } else if (answer === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return("You Win! Rock beats Scissors. ")
    } else if (answer === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return("You Win! Paper beats Rock. ")
    } else if (answer === 'paper' && computerSelection === 'scissors'){
        compScore++;
        return("You Lose! Scissors beats Paper. ")
    } else if (answer === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        return("You Win! Scissors beats Paper. ")
    } else if (answer === 'scissors' && computerSelection === 'rock'){
        compScore++;
        return("You Lose! Rock beats Scissors.")
    } else {
        return(`You Tied! You both selected ${playerSelection}.`);
    }

}

function game(){

}
console.log(playRound(playerSelection,computerSelection));
