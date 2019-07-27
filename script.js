function computerPlay() {
    let play = Math.floor(Math.random()*3);
    switch (play) {
        case 0 : return 'rock';
        case 1 : return 'paper';
        case 2 : return 'scissors';
    }
}

function playRound(playerPlay) {
    
    computerSelection = computerPlay();
    
    result.textContent = `Your choice: ${playerPlay} | Computers choice: ${computerSelection}`;
    
    // Conditions for the player to win
    let win = (playerPlay == 'rock'&&computerSelection == 'scissors') || (playerPlay == 'paper'&&computerSelection == 'rock') || (playerPlay == 'scissors'&&computerSelection == 'paper');

    let h3 = document.createElement('h3');

    if(playerPlay == computerSelection) {  // First condition is draw;
        h3.textContent = 'DRAW!';
    }
    else if(win) { 
        h3.textContent = 'You WIN this Round!';
        scorePlayer++;
    }
    else if(!win) {
        h3.textContent = 'You LOSE this Round!';
        scoreComputer++;
    }
    result.appendChild(h3);
}


function count(e) {
    // var el = e.currentTarget;
    // el.clicks = (el.clicks || 0) + 1;
    // console.log(el.clicks);
    
    playRound(this.id);

    score.textContent = 'Player: ' + scorePlayer + "  | " + "Computer: " + scoreComputer;

    if (scorePlayer === timesToWin || scoreComputer === timesToWin)
    {
        let h2 = document.createElement('h2');
        h2.textContent = "GAME OVER! " + "YOU " + (scorePlayer > scoreComputer ? "WIN!" : "LOSE!");
        container.appendChild(h2);
        
        start.textContent = 'Click to restart';

        rock.removeEventListener('click', count);
        paper.removeEventListener('click', count);
        scissors.removeEventListener('click', count);
    }
}

function startGame() {

    scorePlayer = 0;
    scoreComputer = 0;

    rock.addEventListener('click', count);
    paper.addEventListener('click', count);
    scissors.addEventListener('click', count);
    
    score.textContent = 'Player: ' + scorePlayer + "  | " + "Computer: " + scoreComputer;
    
    const textStart = document.querySelector('#textStart');
    textStart.textContent = 'Choose Wisely!';
    
    //Restarting things
    if(result.children[0]) {
        result.removeChild(result.children[0]);
        result.textContent = '';
    }
    if(container.children[2]) {
        container.removeChild(container.children[2]);
    }
}

const result = document.querySelector('.result');
const score = document.querySelector('.score');
const container = document.querySelector('#container');

const start = document.querySelector('#start');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let scorePlayer = 0;
let scoreComputer = 0;
let timesToWin = 2;

start.addEventListener('click',startGame);