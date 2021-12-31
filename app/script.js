const options = ['Rock', 'Paper', 'Scissors'];
const optionsSection = document.querySelector('.rps-btns');
const rock = document.querySelector('.rock__btn');
const paper = document.querySelector('.paper__btn');
const scissors = document.querySelector('.scissors__btn');
const update = document.querySelector('.update');
const userScore = document.querySelector('.score__player');
const frontmanScore = document.querySelector('.score__frontman');

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let getPlayerNum = 0;
let prizeMoney = 0;

// Randomly pick option for computer
function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    return options[computerSelection];
}

// Generate number between 1-456 for random player number
function randomPlayerNum(min, max) {
    min = Math.ceil(1);
    max = Math.floor(456);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getPlayerNum = randomPlayerNum();

// Insert random player number into welcome message
document.querySelectorAll('.player-num').forEach(num => {
    num.textContent = getPlayerNum;
});

// Generate random number for prize shown at end of game
function prize(min, max) {
    min = Math.ceil(10);
    max = Math.floor(99);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

prizeMoney = prize();

function resetGame() {
    window.location.reload();
}

// Take players selection, compare it to 'computerPlay' then return winner
function keepScore(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Scissors') {
        playerScore++;
        return update.textContent = 'The Front Man picked Scissors, you win this round!';
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Paper') {
        computerScore++;
        return update.textContent = 'The Front Man picked Paper, you lose this round!';
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Rock') {
        playerScore++;
        return update.textContent = 'The Front Man picked Rock, you win this round!';
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Scissors') {
        computerScore++;
        return update.textContent = 'The Front Man picked Scissors, you lose this round!';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Rock') {
        computerScore++;
        return update.textContent = 'The Front Man picked Rock, you lose this round!';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Paper') {
        playerScore++;
        return update.textContent = 'The Front Man picked Paper, you win this round!';
    } else {
        return update.textContent = `The Front Man also picked ${playerSelection}. Go again!`;
    }
}

rock.addEventListener('click', () => {
    playerSelection = 'Rock';
    playRound();
});

paper.addEventListener('click', () => {
    playerSelection = 'Paper';
    playRound()
});
scissors.addEventListener('click', () => {
    playerSelection = 'Scissors';
    playRound()
});

function gameOver(playerScore, computerScore) {
    if (playerScore >= 5) {
        optionsSection.innerHTML = '<button type="button" onClick="resetGame()">Play Again!</button>';
        update.style.cssText = 'font-size: 26px; color: #F44788;';
        return update.textContent = `Way to go! $${prizeMoney},000,000 will be desposited into your account!`;
    } else if (computerScore >= 5) {
        optionsSection.innerHTML = '<button type="button" onClick="resetGame()">Play Again!</button>';
        update.style.cssText = 'font-size: 26px; color: #F44788;';
        return update.textContent = `Looks like you're going home empty handed. Better luck next time!`;
    } else {
        return update;
    }
}

function playRound() {
    computerSelection = computerPlay();
    keepScore(playerSelection, computerSelection);
    frontmanScore.textContent = computerScore;
    userScore.textContent = playerScore;
    gameOver(playerScore, computerScore);
}