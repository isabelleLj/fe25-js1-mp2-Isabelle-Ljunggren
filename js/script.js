



let numberOfRounds = 0;
let score = 0;
let totalScore = 0;
let playerName = 'Walter White'; // Default name if player doesnt pick name



const nameSubmit = document.querySelector('#submit');
const input = document.querySelector('input');
const displayName = document.querySelector('#displayName');



const main = document.querySelector('main');
const totalPoints = document.querySelector('#totalPoints');
const roundScore = document.querySelector('#roundScore');
const yourRounds = document.querySelector('#yourRounds');

const btnRoll = document.querySelector('#roll');
const btnHold = document.querySelector('#hold');
const btnNewGame = document.querySelector('New Game')




function updateName(event){
    event.preventDefault();
    playerName = input.value;
    displayName.innerText = `Player: ${playerName}`;
}





function theDiceRoll (event){
    event.preventDefault();
    let dice = Math.floor(Math.random()*6)+1;
    score += dice;

    roundScore.innerText = `Your score on this round is : ${score}`;
    diceResult.innerText = `The dice landed on ${dice}`;

    if(dice == 1){
        score = 0;
        resetRound();
        roundScore.innerText = `OH NO you rolled a ${dice}.\n Your round score have been reset!\n Roll the dice again.`;
    } 
    
}

function resetRound () {
    numberOfRounds++;
    yourRounds.innerText = `Number of rounds: ${numberOfRounds}`;
}

function hold(event){
    event.preventDefault();
    totalScore += score;
    endOfGame();
    score = 0;
    resetRound();


    totalPoints.innerText = `Total points: ${totalScore}`;
    yourRounds.innerText = `Number of rounds: ${numberOfRounds}`;

}

function endOfGame(){
    if (totalScore >= 100){
    alert(`Congratulations, you won the game!\nTotal points: ${totalScore}\nAntal omgångar: ${numberOfRounds}`);
    }
}




nameSubmit.addEventListener('click', updateName);
btnRoll.addEventListener('click', theDiceRoll);
btnHold.addEventListener('click', hold);



