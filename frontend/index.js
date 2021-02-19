// if cell # is in API for board, change color tile
const BASE_URL = 'http://localhost:3000'
const scoreList = document.getElementById("score-container");
const boardList = document.getElementById('board-container');
const grid = document.querySelector('.grid')
const squares = []
let currentPosition;
const tardisCard = `<img id="tardis" width=100 height=100 src="images/tardis-icon.png">`; // ???
let regularTile; // darkred color ???
let currentBoardId;

function createBoard() {
    for (let i = 1; i < 26; i++) {
    const square = document.createElement('div')
    square.id = `cell-${i}`
    grid.appendChild(square)
    squares.push(square)
}}
console.log(squares)
createBoard()



let score = 0
const totalMoves = document.getElementById("total-moves")
totalMoves.innerHTML = `<p class="light-text">Total Moves: ${score}</p>`

document.addEventListener("keyup", function(e) {
    if (e.key === "ArrowLeft") {
        movePlayerLeft();
        totalMoves.innerHTML = `<p class="light-text">Total Moves: ${score}</p>`
    }
    else if (e.key === "ArrowRight") {
        movePlayerRight();
        totalMoves.innerHTML = `<p class="light-text">Total Moves: ${score}</p>`
    }
    else if (e.key === "ArrowDown") {
        movePlayerDown();
        totalMoves.innerHTML = `<p class="light-text">Total Moves: ${score}</p>`
    }
    else if (e.key === "ArrowUp") {
        movePlayerUp();
        totalMoves.innerHTML = `<p class="light-text">Total Moves: ${score}</p>`
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
        checkForWinner()
        //document.getElementById(`cell-${currentPosition}`).style.color = "darkred"  
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
        checkForWinner()
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
        checkForWinner()
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
        checkForWinner()
    }
}


function addScoreForm() {
    const addBtn = document.querySelector("#new-score-btn");
    const formContainer = document.querySelector(".form-container");
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
        //WINNING!
        console.log("WINNING!")
        //check for one square
        //or check for booth
        //enterName();
        // sendFetchRequest();
        // addScoreToList();
    }
    //Score.renderScore()
    // if won, send fetch request with info on score and board id and username
    // with data we get back, instantiate a new score and render/save to list   
}

addScoreForm();
const scoreApi = new ScoreApi(BASE_URL)
scoreApi.getScores();
const boardApi = new BoardApi(BASE_URL)
boardApi.getBoards();