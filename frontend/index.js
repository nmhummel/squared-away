const BASE_URL = 'https://squared-away.netlify.app/'
const boardApi = new BoardApi(BASE_URL);
const scoreApi = new ScoreApi(BASE_URL);
const scoreList = document.getElementById("score-container");
const boardList = document.getElementById('board-container');
const grid = document.querySelector('.grid')
const squares = []
let currentPosition;
const tardisCard = `<img id="tardis" src="images/tardis-icon.png">`; 
let regularTile; 
let currentBoardId;
const modalBtn = document.querySelector('.modal-btn')
const modalBg = document.querySelector('.modal-bg')
const modalBtn2 = document.querySelector('.modal-btn2')
const modalBg2 = document.querySelector('.modal-bg2')

let x = document.getElementById("myAudio");
function playAudio() {
  x.play();
}

// const sortButton = document.getElementById("sortButton")
// const scoreFilter = document.getElementById("filterScore")
// sortButton.addEventListener("click", filterScores)
// function filterScores() {
//     let goober = Score.allScores.filter(score => score.moves > scoreFilter.value)
//     console.log(goober)
//     scoreList.innerHTML = `<div class="dark-text">Top Scores</div>`
//     goober.forEach((score) => {
//          scoreList.appendChild(score.element)
//     })
// }

function createBoard() {
    for (let i = 1; i < 26; i++) {
    const square = document.createElement('div')
    square.id = `cell-${i}`
    grid.appendChild(square)
    squares.push(square)
}}

createBoard();
scoreApi.getScores();
boardApi.getBoards();

let score = 0
const totalMoves = document.getElementById("total-moves")
totalMoves.innerHTML = `<p class="light-text">Total Moves: ${score}</p>`

document.addEventListener("keyup", function(e) {
    if (e.key === "ArrowLeft") {
        movePlayerLeft();
        totalMoves.innerHTML = `<p class="light-text">Total Moves: ${score}</p>`
        checkForWinner();
    }
    else if (e.key === "ArrowRight") {
        movePlayerRight();
        totalMoves.innerHTML = `<p class="light-text">Total Moves: ${score}</p>`
        checkForWinner();
    }
    else if (e.key === "ArrowDown") {
        movePlayerDown();
        totalMoves.innerHTML = `<p class="light-text">Total Moves: ${score}</p>`
        checkForWinner();
    }
    else if (e.key === "ArrowUp") {
        movePlayerUp();
        totalMoves.innerHTML = `<p class="light-text">Total Moves: ${score}</p>`
        checkForWinner();
    }
})

let playerStart = document.getElementById('cell-1');
playerStart.innerHTML = `<img id="player" src="images/100-right.png">`;
currentPosition = 0;
const player = document.getElementById('player');

function movePlayerRight() {
    let oldSquare = squares[currentPosition]
    player.src = "images/100-right.png"
    if (currentPosition !== 4 && currentPosition !== 9 && currentPosition !== 14 && currentPosition !== 19 && currentPosition !== 24) {
        currentPosition += 1
        squares[currentPosition].innerHTML = `<img id="player" src="images/100-right.png">`
        oldSquare.innerHTML = ""    
        score += 1
    }
}

function movePlayerLeft() {
    let oldSquare = squares[currentPosition]
    player.src = "images/100-left.png"
    if (currentPosition !== 0 && currentPosition !== 5 && currentPosition !== 10 && currentPosition !== 15 && currentPosition !== 20) {
        currentPosition -= 1
        squares[currentPosition].innerHTML = `<img id="player" src="images/100-left.png">`
        oldSquare.innerHTML = ""
        score += 1
    }
} 

function movePlayerDown() {
    let oldSquare = squares[currentPosition]
    player.src = "images/100-down.png"
    if (currentPosition !== 20 && currentPosition !== 21 && currentPosition !== 22 && currentPosition !== 23 && currentPosition !== 24) {
        currentPosition += 5
        squares[currentPosition].innerHTML = `<img id="player" src="images/100-down.png">`
        oldSquare.innerHTML = ""
        score += 1
    }
}

function movePlayerUp() {
    let oldSquare = squares[currentPosition]
    player.src = "images/100-up.png"
    if (currentPosition !== 0 && currentPosition !== 1 && currentPosition !== 2 && currentPosition !== 3 && currentPosition !== 4) {
        currentPosition -= 5
        squares[currentPosition].innerHTML = `<img id="player" src="images/100-down.png">`
        oldSquare.innerHTML = ""
        score += 1
    }
}

function checkForWinner() {
    if (squares.every(cell => cell.innerHTML !== tardisCard)) {
       setTimeout(() => { 
        
        modalBg2.classList.add('bg-active')
        modalBg2.innerHTML = `
        The TARDIS has been EXTERMINATED!<br>Enter a name to save your score:<br><br>
        <form id="score-submit-form">
            <input type="text" id="username-input"><br><br>
            <input type="submit" value='enter score' class="modal-btn2"/>
        </form>
        `
        const scoreForm = document.getElementById('score-submit-form')
        scoreForm.addEventListener("submit", handleSubmit)
      }, 500 )
    } 
}

function handleSubmit(event) {
    event.preventDefault()
    let username = document.getElementById('username-input').value
    createScore(score, username, currentBoardId)
    event.target.reset()
    modalBg2.classList.remove('bg-active')
}


// if square is empty and player touches on it to get to Tardis, populate Tardis in that square