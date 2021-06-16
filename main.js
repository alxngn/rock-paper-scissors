const rock = 'rock',
    paper = 'paper',
    scissors = 'scissors';

//const computerSelection = computerPlay();
//let playerSelection = prompt("Enter your play:").trim().toLowerCase();
//console.log(playerSelection);

console.log(playRound(rock, paper));


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
    console.log(play);
    return play;
}

function playRound(playerSelection, computerSelection) {
    let message;
    let lose = "You Lose!";
    let win = "You Win!";
    let pvr = " Paper beats Rock";

    if (playerSelection != computerSelection) {
        switch(playerSelection) {
            case rock: // user plays rock
                switch(computerSelection) {
                    case paper:
                        message = lose + pvr;
                        break;
                }

            case paper: // user plays paper
                break;
            case scissors:
                break;
        }
    } else {
        message = "It's a draw. Let's play again!";
    }

    return message;
}