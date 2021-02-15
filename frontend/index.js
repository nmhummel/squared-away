
document.addEventListener("DOMContentLoaded", () => {
    fetchScores()
    //fetchBoards()
})

const BASE_URL = 'http://localhost:3000'
// read - scoreboard (scores, username)
function fetchScores() {
    fetch(`${BASE_URL}/scores`)
    .then(resp => resp.json())
    .then(scores => {console.log("OBJ", scores)}
    //     for (const score of scores) {
    //         console.log("OBJ", score)
    //         let s = new Score(score.id, score.moves, score.username, score.board_id)
    //         console.log("obj", s)
    //     }
    // }
    )
}
// create - new score
// update - update score when repeating a board

//create board
const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 600;

// player avatar assignment
const upMove = new Image(); // Create new img element
upMove.src = 'd-up.png'; // Set source path
const downMove = new Image(); 
downMove.src = 'd-down.png'; 
const rightMove = new Image(); 
rightMove.src = 'd-right.png'; 
const leftMove = new Image(); 
leftMove.src = 'd-left.png'; 

 

// global variables
const cellSize = 100;
const cellGap = 0;
const gameGrid = [];

//game board
const controlSquare = {
    width: cellSize,
    height: cellSize,
}

class Cell {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }
    draw() {
        context.strokeStyle = "black";
        context.strokeRect(this.x, this.y, this.width, this.height);
    }
}

function createGrid() {
    for (let y = cellSize; y < canvas.height; y += cellSize) {
        for (let x = 0; x < canvas.width; x += cellSize) {
            gameGrid.push(new Cell(x,y));
        }
    }
}
createGrid();
console.log(gameGrid);

function handleGameGrid() {
    for (let i = 0; i < gameGrid.length; i++) {
        gameGrid[i].draw();
    }
}
handleGameGrid();  


// function animate() {
//     context.fillStyle = "blue";
//     context.fillRect(0,0, controlSquare.width, controlSquare.height);
//     requestAnimationFrame(animate);
// }

// animate();