// create variables for player score and computer score.
let playerScore = 0;
let compScore = 0;
let winner ='';

// Create a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay(){
    // create array to hold options
    let options = ['rock', 'paper', 'scissors'];
    // create random number between 0 and array length
    let randomPick = Math.floor(Math.random() * (options.length));
    // return value from array with random number
    return(options[randomPick]);
}

// create a function that plays a single round of Rock Paper Scissors. Then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection){
    // if statements to test if player wins or loses.
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        ++compScore;
        winner = 'You Lose! Paper beats Rock.';
        return;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        ++playerScore;
        winner = 'You Win! Rock beats Scissors.';
        return;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        ++playerScore;
        winner = 'You Win! Paper beats Rock.';
        return;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        ++compScore;
        winner = 'You Lose! Scissors beats Paper.';
        return;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        ++playerScore;
        winner = 'You Win! Scissors beats Paper.';
        return;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        ++compScore;
        winner = 'You Lose! Rock beats Scissors.';
        return;
    } else{
        winner = `You Tied! You both selected ${playerSelection}.`;
        return;
    }

}

function updateUI(){
    // show players selections
    const playerSelected = document.querySelector('.player-selected');
    const computerSelected = document.querySelector('.computer-selected');
    playerSelected.textContent = playerSelection; 
    computerSelected.textContent = computerSelection; 
    // show win/lose round
    const roundWinner = document.querySelector('.winner');
    roundWinner.textContent = winner;
    // update score
    const pScore = document.querySelector("#player-score");
    const cScore = document.querySelector("#computer-score");
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${compScore}`;
}

function isGameOver(){
    const gameWinner = document.querySelector('.game-winner');
    if (compScore === 5 || playerScore === 5){
        // show who won the game
        (compScore>playerScore) ? gameWinner.textContent = "Oh no the computer won." : gameWinner.textContent = "Great job, You won!!!";
        // hide buttons so game can not be played any further
        buttons.forEach((button)=>{
            button.classList.add('hide');
        });
        // use restartGame() to add restart btn
        restartGame();
    }
}

function restartGame(){
        const form = document.querySelector('form');
        // create a button inside of form to refresh page
        const restartBtn = document.createElement('button');
        restartBtn.classList.add('restart-btn');
        restartBtn.textContent = 'Play again?';
        form.appendChild(restartBtn);
}

// UI
// select all buttons on page
const buttons = document.querySelectorAll('button');    
buttons.forEach((button) =>{
    // get id of clicked button and assign it to playerselection
        button.addEventListener('click',() => {
            // check if either player has won 5 rounds.
            
            // pass values of selections
            playerSelection = button.id;
            computerSelection = computerPlay();
            // run play round with values from above
            playRound(playerSelection, computerSelection);
            // update UI
            updateUI();
            // check if either player has won 5 times
            isGameOver();
            
        });
});


