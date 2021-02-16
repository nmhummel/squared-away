
document.addEventListener("DOMContentLoaded", () => {
    fetchBoards()
    createScoreboard()
    //showBoards
})
 
// //create board
// const gameBoard = document.getElementById('gameBoard');
// //const context = gameBoard.getContext('2d');
//     gameBoard.width = 500;
//     gameBoard.height = 500;
// const cellSize = 100;
// //const cellGap = 0;
// //const gameGrid = [];

const BASE_URL = 'http://localhost:3000'
const player = document.getElementById('player');
const gameBoard = document.getElementById('gameBoard');
gameBoard.width = 500;
gameBoard.height = 500;

const cellSize = 100;
const gameGrid = [];

class Cell {
    constructor(x,y,counter) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
        this.element = document.getElementById(`cell${counter}`)
    }
    

}

// function createDivs() {
//     const cell = document.createElement('div')
    
// }
// each cell as it's own div element, all the same size - display: block inside divs
// gameboard div is container
// flex grid gameboard container
// class called game for gameGrid - for making new game 

// if cell # is in API for board, change color tile

function createGrid() {
    let counter = 1;
    for (let y = cellSize; y < gameBoard.height; y += cellSize) {
        for (let x = 0; x < gameBoard.width; x += cellSize) {
            gameGrid.push(new Cell(x,y,counter));
            counter++;
        }
    }
}
createGrid();
console.log(gameGrid);

document.addEventListener("keyup", function(e) {
    if (e.key === "ArrowLeft") {
        movePlayerLeft();
    }
    else if (e.key === "ArrowRight") {
        movePlayerRight();
    }
    else if (e.key === "ArrowDown") {
        movePlayerDown();
    }
    else if (e.key === "ArrowUp") {
        movePlayerUp();
    }
})

let playerLeft = 0;
let playerTop = 0;

function movePlayerRight() {
    player.src = "images/100-right.png"
    if (playerLeft < 400) {
        playerLeft += 100;
        player.style.left = playerLeft + 'px';
    }
}

function movePlayerLeft() {
    player.src = "images/100-left.png"
    if (playerLeft > 0) {
        playerLeft -= 100;
        player.style.left = playerLeft + 'px'; 
    }
} 

function movePlayerDown() {
    player.src = "images/100-down.png"
    if (playerTop < 400) {
        playerTop += 100;
        player.style.top = playerTop + 'px';
    }
}

function movePlayerUp() {
    player.src = "images/100-up.png"
    if (playerTop > 0) {
        playerTop -= 100;
        player.style.top = playerTop + 'px';
    }
}

// function handleGameGrid() {
//     for (let i = 0; i < gameGrid.length; i++) {
//         gameGrid[i].draw();
//     }
// }
// handleGameGrid(); 


// player avatar assignment
// const upMove = new Image(); // Create new img element
//     upMove.src = 'd-up.png'; // Set source path
// const downMove = new Image(); 
//     downMove.src = 'd-down.png'; 
// const rightMove = new Image(); 
//     rightMove.src = 'd-right.png'; 
// const leftMove = new Image(); 
//     leftMove.src = 'd-left.png'; 
// const tardisCard = new Image(95, 95);
//     tardisCard = "tardis-icon";