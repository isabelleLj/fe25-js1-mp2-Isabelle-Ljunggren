
let numberOfRounds = 0;
let score = 0;
let totalScore = 0;




const main = document.querySelector('main');

const playerName = document.querySelector('#playerName');


const totalPoints = document.querySelector('#totalPoints');
const roundScore = document.querySelector('#roundScore');
const yourRounds = document.querySelector('#yourRounds');


const btnRoll = document.querySelector('#roll');
const btnHold = document.querySelector('#hold');
const btnNewGame = document.querySelector('New Game')


function newName(){
    const addName = prompt(' Enter your name:');
    playerName.innerText = `Player:${addName}`;


};


function theDiceRoll (event){
    event.preventDefault();
    let dice = Math.floor(Math.random()*6)+1;
    score += dice;
    roundScore.innerText = `Your score on this round is : ${score}`;
    console.log(dice)
    diceResult.innerText = `The dice landed on ${dice}`;
    if(dice == 1){
        score = 0;
        roundScore.innerText = `OH NO you rolled a ${dice}.\n Your round score have been reset!\n Roll the dice again.`;
    } 
    
}

function hold(event){
    event.preventDefault();
    totalScore += score;
    endOfGame();
    score = 0;
    totalPoints.innerText = `Total points: ${totalScore}`;
    numberOfRounds++;
    yourRounds.innerText = `Number of rounds: ${numberOfRounds}`;

}

function endOfGame(){
    if (totalScore >= 100){
    alert(`Grattis! Du vann spelet!\nTotal poäng: ${totalScore}\nAntal omgångar: ${numberOfRounds}`);
    }
}


playerName.addEventListener('click', newName);
btnRoll.addEventListener('click', theDiceRoll);
btnHold.addEventListener('click', hold);



