const rock = 'rock',
    paper = 'paper',
    scissors = 'scissors';

const computer = computerPlay();
let player = prompt("Enter your play:").trim().toLowerCase();
//console.log(playerSelection);

console.log(player);
console.log(computer);

console.log(playRound(player, computer));


function computerPlay() {
    switch (Math.floor(Math.random() * 9) + 1) {
        case 1:
        case 4:
        case 7:
            play = rock;
            break;
        case 2:
        case 5:
        case 8:
            play = paper;
            break;
        case 3:
        case 6:
        case 9:
            play = scissors;
            break;
    }

    return play;
}

function playRound(playerSelection, computerSelection) {
    let message;
    let lose = "You Lose!";
    let win = "You Win!";
    let pbr = " Paper beats Rock.";
    let sbp = " Scissors beat Paper.";
    let rbs = " Rock beats Scissors.";

    if (playerSelection != computerSelection) {
        switch(playerSelection) {

            case rock: // user plays rock
                switch(computerSelection) {
                    case paper:
                        message = lose + pbr;
                        break;
                    case scissors:
                        message = win + rbs;
                        break;
                }
                break;

            case paper: // user plays paper
                switch(computerSelection) {
                    case rock:
                        message = win + pbr;
                        break;
                    case scissors:
                        message = lose + sbp;
                        break;
                }
                break;

            case scissors: // user plays scissors
                switch(computerSelection) {
                    case paper:
                        message = win + sbp;
                        break;
                    case rock:
                        message = lose + rbs;
                        break;
                }
                break;
        }
    } else {
        message = "It's a draw. Let's play again!";
    }

    return message;
}