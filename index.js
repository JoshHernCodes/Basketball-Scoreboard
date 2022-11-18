let homeBoard = document.getElementById("home-board");
let awayBoard = document.getElementById("away-board");
let homeScore = 0;
let awayScore = 0;

function homeAddOne() {
    homeScore += 1;
    homeBoard.textContent = homeScore;
}
function homeAddTwo(){
    homeScore += 2;
    homeBoard.textContent = homeScore;
}
function homeAddThree(){
    homeScore += 3;
    homeBoard.textContent = homeScore;
}
function awayAddOne(){
    awayScore += 1;
    awayBoard.textContent = awayScore;
}
function awayAddTwo(){
    awayScore += 2;
    awayBoard.textContent = awayScore;
}
function awayAddThree(){
    awayScore += 3;
    awayBoard.textContent = awayScore;
}
function newGame(){
    homeScore = 0;
    awayScore = 0;
    homeBoard.textContent = 0;
    awayBoard.textContent = 0;
}