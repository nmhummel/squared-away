
// document.addEventListener("DOMContentLoaded", () => {
   
//     //fetchBoards()
// })
 
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
    playerLeft += 100;
    player.src = "images/100-right.png"
    player.style.left = playerLeft + 'px';
    if (playerLeft >= 400) {
        playerLeft -= 100;
    }
}

function movePlayerLeft() {
    playerLeft -= 100;
    player.src = "images/100-left.png"
    player.style.left = playerLeft + 'px';
    if (playerLeft < 0) {
        playerLeft += 100
    }
} 

function movePlayerDown() {
    playerTop += 100;
    player.src = "images/100-down.png"
    player.style.top = playerTop + 'px';
    if (playerTop >= 400) {
        playerTop -=100;
    }
}

function movePlayerUp() {
    playerTop -= 100;
    player.src = "images/100-up.png"
    player.style.top = playerTop + 'px';
    if (playerTop <=0) {
        playerTop += 100;
    }
}

const cellSize = 100;
const gameGrid = [];

class Cell {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }
    
    // draw() {
    //     //gameBoard.strokeStyle = "white";
    //     //gameBoard.strokeRect(this.x, this.y, this.width, this.height);
    // }
}

function createGrid() {
    for (let y = cellSize; y < gameBoard.height; y += cellSize) {
        for (let x = 0; x < gameBoard.width; x += cellSize) {
            gameGrid.push(new Cell(x,y));
        }
    }
}
createGrid();
console.log(gameGrid);

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