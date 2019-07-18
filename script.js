
let Rock = document.getElementById('Rock').addEventListener('click', run);
let Paper = document.getElementById('Paper').addEventListener('click', run);
let Scissors = document.getElementById('Scissors').addEventListener('click', run);
let Lizard = document.getElementById('Lizard').addEventListener('click', run);
let Spock = document.getElementById('Spock').addEventListener('click', run);

let computerChoice;
let playerChoice;

let player = document.getElementById('player');
let computer = document.getElementById('computer');
let outcome = document.getElementById('outcome');

function run() {
    playerChoice = this.innerText;
    compRandomChoice();
    compare();
}

function compRandomChoice() {
    let dice = Math.random();
    if (dice <= 0.2) {
        computerChoice = 'Rock';
    } else if (dice <= 0.4) {
        computerChoice = 'Paper';
    } else if (dice <= 0.6) {
        computerChoice = 'Scissors';
    } else if (dice <= 0.8) {
        computerChoice = 'Lizard';
    } else {
        computerChoice = 'Spock';
    }
}

let gamePairs = []

function compare() {
    player.innerHTML = 'You have chosen ' + playerChoice;
    computer.innerHTML = 'Computer chooses ' + computerChoice;

    if (playerChoice == computerChoice) {
        outcome.innerHTML = 'Stalemate';
    } else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Rock' && computerChoice === 'Lizard') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Paper' && computerChoice === 'Spock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Scissors' && computerChoice === 'Lizard') ||
    (playerChoice === 'Lizard' && computerChoice === 'Paper') ||
    (playerChoice === 'Lizard' && computerChoice === 'Spock') ||
    (playerChoice === 'Spock' && computerChoice === 'Rock') ||
    (playerChoice === 'Spock' && computerChoice === 'Scissors'))
    {
            outcome.innerHTML = 'You Win!';
    }
    else {
            outcome.innerHTML = 'You Lose!';
    }
}