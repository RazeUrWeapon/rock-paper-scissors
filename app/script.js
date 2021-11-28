const options = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

// Randomly picks an option for computer
function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    return options[computerSelection];
}

// Runs the game 5 times and keeps score
for (let i = 0; i < 5; i++) {
    // const playerSelection = prompt('Pick one: Rock, Paper, or Scissors');
    const computerSelection = computerPlay();

// Takes players selection, compares it to 'computerPlay' function then returns if player won or loss
    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Scissors') {
            playerScore++;
            return 'Rock beats Scissors, you won this round!';
        } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Paper') {
            computerScore++;
            return 'Paper beats Rock, you lose this round!';
        } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Rock') {
            playerScore++;
            return 'Paper beats rock, you win this round!';
        } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Scissors') {
            computerScore++;
            return 'Scissors beats rock, you lose this round!';
        } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Rock') {
            computerScore++;
            return 'Rock beats Scissors, you lose this round!';
        } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Paper') {
            playerScore++;
            return 'Scissors beats Paper, you win this round!';
        } else {
            return 'You tied, play again!';
        }
    }
    console.log(`The computer picked: ${computerSelection}.`);
    console.log(playRound(playerSelection, computerSelection));
}    

// Displays final results
if (playerScore > computerScore) {
    console.log(`The final score is... Player: ${playerScore}, Computer: ${computerScore}. Congratulations, you win!`);
} else if (playerScore < computerScore) {
    console.log(`The final score is... Player: ${playerScore}, Computer: ${computerScore}. You lose! Better luck next time.`);
} else {
    console.log(`The final score is... Player: ${playerScore}, Computer: ${computerScore}. It's a tie!`);
}