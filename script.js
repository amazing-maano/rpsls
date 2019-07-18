
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
        var choices = ['Rock','Paper','Scissors','Lizard','Spock'];
        var randomIndex = Math.floor(Math.random() * choices.length);
        computerChoice = choices[randomIndex];
}

const gamePairs = {
        Rock : {
            Lizard: 'Rock crushes Lizard',
            Scissors:'Rock crushes Scissors'
        },
        Paper : {
            Rock: 'Paper covers Rock',
            Spock: 'Paper disproves Spock'
        },
        Scissors : {
            Paper: 'Scissors cuts Paper',
            Lizard: 'Scissors decapitates Lizard'
        },
        Lizard : {
            Spock: 'Lizard poisons Spock',
            Paper: 'Lizard eats Paper'
        },
        Spock : {
            Scissors: 'Spock smashes Scissors',
            Rock: 'Spock vaporizes Rock'
        }
    }

function compare() {
    player.innerHTML = 'You have chosen ' + playerChoice;
    computer.innerHTML = 'Computer chooses ' + computerChoice;
        
    if (playerChoice == computerChoice) {
        outcome.innerHTML = 'Stalemate';
    } else{
        let choice = gamePairs[playerChoice][computerChoice];
        if (choice){
            outcome.innerHTML = 'You Win!';
        } else{
                outcome.innerHTML = 'You Lose!';
        }
    }
}