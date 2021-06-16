const rock = 'rock',
    paper = 'paper',
    scissors = 'scissors',
    cancel = 'canceled';

game();

function game() {
    // looping 5 times
    for (let i = 0; i < 5; i++) {
        const computer = computerPlay();
        let player = userPlay();
        
        if (player !== cancel) {
            console.log("You played: " + player);
            console.log("Computer played: " + computer);
            alert("Computer played: " + computer + '\n' + playRound(player, computer));
        } else {
            break;
        }
        
        console.log(playRound(player, computer));
    }
}

function userPlay() {
    const plays = [ rock, paper, scissors ];

    // case-insensitive
    let raw = prompt("Enter your play:");

    // check if user enters correctly
    if (raw == null) {
        alert("You've canceled!");
        console.log('User canceled!');
        return cancel;
    } else if (plays.includes(raw.trim().toLowerCase())) {
        let play = raw.trim().toLowerCase();
        return play;
    } else {
        alert("Please enter a correct play!");
        return userPlay();
    }
}

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

            case cancel: // user press escape
                message = 'User canceled!';
        }
    } else {
        message = "It's a draw. Everybody's a winner!";
    }

    return message;
}