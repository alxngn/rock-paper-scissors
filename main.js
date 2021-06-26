// 

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    //const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`button[class="${e.keyCode}"]`);
 // if (!audio) return;
    console.log(e.keyCode);
    key.classList.add('playing');
/*    audio.currentTime = 0;
    audio.play();
*/
  }
/*
  const keys = Array.from(document.querySelectorAll('.play'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);
*/
//


const rock = 'rock',
    paper = 'paper',
    scissors = 'scissors',
    cancel = 'canceled';
let usrWin = 0,
    comWin = 0;
const buttons = document.querySelectorAll('button[class="play"]');
const reset = document.querySelector('#reset');

buttons.forEach(button => button.addEventListener('click', playGame));
reset.addEventListener('click', () => {
    window.location.reload(true);
});

function playGame(e) {

    const div = document.querySelector('#result');
    const usrScore = document.querySelector('#usrScore');
    const comScore = document.querySelector('#comScore');

    div.textContent += '\r\n' + game(e.srcElement.id);  
    score(usrScore,comScore);
    
    anounceWinner(div);
}

function score(usr,com) {
    usr.textContent = usrWin;
    com.textContent = comWin;
}

function anounceWinner(para) {

    if (usrWin == 5 && comWin < 5) {
        para.textContent = "\r\nYou've won the game. Congratulations!!!";
    } else if (comWin == 5 && usrWin < 5) {
        para.textContent = "\r\nYou've lost the game. Computer won. Better luck next time.";
    }
}


function game(choice) {
    const computer = computerPlay();
    let player = choice;

    let result = `Computer played ${computer}. ` + playRound(player, computer);

    return result;
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
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
        case 4:
        case 9:
            return rock;
            break;
        case 2:
        case 5:
        case 8:
            return paper;
            break;
        case 3:
        case 6:
        case 7:
            return scissors;
            break;
    }
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
                        comWin += 1;
                        break;
                    case scissors:
                        message = win + rbs;
                        usrWin += 1;
                        break;
                }
                break;

            case paper: // user plays paper
                switch(computerSelection) {
                    case rock:
                        message = win + pbr;
                        usrWin += 1;
                        break;
                    case scissors:
                        message = lose + sbp;
                        comWin += 1;
                        break;
                }
                break;

            case scissors: // user plays scissors
                switch(computerSelection) {
                    case paper:
                        message = win + sbp;
                        usrWin += 1;
                        break;
                    case rock:
                        message = lose + rbs;
                        comWin += 1;
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