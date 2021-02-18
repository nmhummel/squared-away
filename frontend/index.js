// each cell as it's own div element, all the same size - display: block inside divs
// gameboard div is container
// flex grid gameboard container
// class called game for gameGrid - for making new game 

// if cell # is in API for board, change color tile
const BASE_URL = 'http://localhost:3000'
const grid = document.querySelector('.grid')
const squares = []
let currentPosition;
const tardisCard = `<img id="tardis" width=100 height=100 src="images/tardis-icon.png">`;
let regularTile; // darkred color

function createBoard() {
    for (let i = 1; i < 26; i++) {
    const square = document.createElement('div')
    square.id = `cell-${i}`
    grid.appendChild(square)
    squares.push(square)
    square.innerHTML = tardisCard
}}
console.log(squares)
createBoard()

let score = 0
const totalMoves = document.getElementById("total-moves")
totalMoves.innerHTML = `<p class="light-text">Total Moves: ${score}</p>`

document.addEventListener("keyup", function(e) {
    if (e.key === "ArrowLeft") {
        movePlayerLeft();
        score += 1
    }
    else if (e.key === "ArrowRight") {
        movePlayerRight();
        score += 1
    }
    else if (e.key === "ArrowDown") {
        movePlayerDown();
        score += 1
    }
    else if (e.key === "ArrowUp") {
        movePlayerUp();
        score += 1
    }
})

//<div id = "cell-1"></div>

//let startCell = document.getElementById(`cell-${i}`)
let playerStart = document.getElementById('cell-1')
playerStart.innerHTML = `<img id="player" src="images/100-right.png">`
currentPosition = 0;
const player = document.getElementById('player');

function movePlayerRight() {
    let oldSquare = squares[currentPosition]
    player.src = "images/100-right.png"
    if (currentPosition !== 4 || currentPosition !== 9 || currentPosition !== 14 || currentPosition !== 19 || currentPosition !== 24) {
        currentPosition += 1
        squares[currentPosition].innerHTML = `<img id="player" src="images/100-right.png">`
        oldSquare.innerHTML = "" 
        //document.getElementById(`cell-${currentPosition}`).style.color = "darkred"
    }
    // else {
    //     squares[currentPosition].innerHTML = `<img id="player" src="images/100-right.png">`
    //     oldSquare.innerHTML = ""
    //     currentPosition = oldSquare
    // }
}

function movePlayerLeft() {
    let oldSquare = squares[currentPosition]
    player.src = "images/100-left.png"
    if (currentPosition !== 0 || currentPosition !== 5 || currentPosition !== 10 || currentPosition !== 15 || currentPosition !== 20) {
        currentPosition -= 1
        squares[currentPosition].innerHTML = `<img id="player" src="images/100-left.png">`
        oldSquare.innerHTML = ""
    }
} 

function movePlayerDown() {
    let oldSquare = squares[currentPosition]
    player.src = "images/100-down.png"
    if (currentPosition !== 20 || currentPosition !== 21 || currentPosition !== 22 || currentPosition !== 23 || currentPosition !== 24) {
        currentPosition += 5
        squares[currentPosition].innerHTML = `<img id="player" src="images/100-down.png">`
        oldSquare.innerHTML = ""
    }
}

function movePlayerUp() {
    let oldSquare = squares[currentPosition]
    player.src = "images/100-up.png"
    if (currentPosition !== 0 || currentPosition !== 1 || currentPosition !== 2 || currentPosition !== 3 || currentPosition !== 4) {
        currentPosition -= 5
        squares[currentPosition].innerHTML = `<img id="player" src="images/100-down.png">`
        oldSquare.innerHTML = ""
    }
}

    




    const scoreList = document.getElementById("score-container");
    const boardList = document.getElementById('board-container');




    // static renderElements = () =>{
    //     this.element.className = "allCells"
    // }
// }