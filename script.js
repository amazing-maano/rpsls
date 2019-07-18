
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

function compare() {
    player.innerHTML = 'You have chosen ' + playerChoice;
    computer.innerHTML = 'Computer chooses ' + computerChoice;

    if (playerChoice == computerChoice) {
        outcome.innerHTML = 'Stalemate';
    } else if (playerChoice === 'Rock') {
            if (computerChoice === 'Paper') {
                outcome.innerHTML = 'Paper covers Rock!';
        } else if (computerChoice === 'Scissors') {
                outcome.innerHTML = 'Rock crushes Scissors!';
        } else if (computerChoice === 'Lizard') {
                outcome.innerHTML = 'Rock crushes Lizard!';
        } else {
                outcome.innerHTML = 'Spock vaporizes Rock!';
        }
    } else if (playerChoice === 'Paper') {
            if (computerChoice === 'Rock') {
                outcome.innerHTML = 'Paper covers Rock!';
        } else if (computerChoice === 'Scissors') {
                outcome.innerHTML = 'Scissors cuts Paper!';
        } else if (computerChoice === 'Lizard') {
                outcome.innerHTML = 'Lizard eats Paper!';
        } else {
                outcome.innerHTML = 'Paper disproves Spock!';
        }
    } else if (playerChoice === 'Scissors') {
            if (computerChoice === 'Rock') {
                outcome.innerHTML = 'Rock crushes Scissors!';
        } else if (computerChoice === 'Paper') {
                outcome.innerHTML = 'Scissors cuts Paper!';
        } else if (computerChoice === 'Lizard') {
                outcome.innerHTML = 'Scissors decapitates Lizard!';
        } else {
                outcome.innerHTML = 'Spock smashes Scissors!';
        }
    } else if (playerChoice === 'Lizard') {
            if (computerChoice === 'Rock') {
                outcome.innerHTML = 'Rock crushes Lizard!';
        } else if (computerChoice === 'Paper') {
                outcome.innerHTML = 'Lizard eats Paper!';
        } else if (computerChoice === 'Scissors') {
                outcome.innerHTML = 'Scissors decapitates Lizard!';
        } else {
                outcome.innerHTML = 'Lizard poisons Spock';
        }
    } else if (playerChoice === 'Spock') {
            if (computerChoice === 'Rock') {
                outcome.innerHTML = 'Spock vaporizes Rock!';
        } else if (computerChoice === 'Paper') {
                outcome.innerHTML = 'Paper disproves Spock!';
        } else if (computerChoice === 'Scissors') {
                outcome.innerHTML = 'Spock smashes Scissors!';
        } else {
                outcome.innerHTML = 'Lizard poisons Spock!';
        }
    }
}