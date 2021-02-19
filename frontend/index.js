const BASE_URL = 'http://localhost:3000'
const scoreList = document.getElementById("score-container");
const boardList = document.getElementById('board-container');
const grid = document.querySelector('.grid')
const squares = []
let currentPosition;
const tardisCard = `<img id="tardis" src="images/tardis-icon.png">`; // ???
let regularTile; 
let currentBoardId;
const formContainer = document.querySelector(".form-container");

function createBoard() {
    for (let i = 1; i < 26; i++) {
    const square = document.createElement('div')
    square.id = `cell-${i}`
    grid.appendChild(square)
    squares.push(square)
}}
//console.log(squares)
createBoard()

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

// if square is empty and player touches on it
//<div id = "cell-1"></div>
let playerStart = document.getElementById('cell-1')
playerStart.innerHTML = `<img id="player" src="images/100-right.png">`
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

function addScoreForm() {
    const addBtn = document.querySelector("#new-score-btn");
    const scoreForm = document.querySelector(".add-score-form")
    scoreForm.addEventListener('submit', createScore)
    let addScore = false;
    formContainer.style.display = "none";
    addBtn.addEventListener("click", () => {
        addScore = !addScore;
        if (addScore) {
            formContainer.style.display = "block";
        } else {
            formContainer.style.display = "none";
        }
    })
}

function checkForWinner() {
    if (squares.every(cell => cell.innerHTML !== tardisCard)) {
        let username;
        setTimeout(() => {
            username = prompt("The TARDIS has been EXTERMINATED! Enter a name to save your score:")
        }, 500 )
        // usernameEntered = username
        // Score.allScores.push(score, usernameEntered, currentBoardId) // ask jenn
        // debugger
    } 
}



addScoreForm();
const scoreApi = new ScoreApi(BASE_URL);
scoreApi.getScores();
const boardApi = new BoardApi(BASE_URL);
boardApi.getBoards();