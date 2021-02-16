
// document.addEventListener("DOMContentLoaded", () => {
   
//     //fetchBoards()
// })



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

 
// //create board
// const gameBoard = document.getElementById('gameBoard');
// //const context = gameBoard.getContext('2d');
//     gameBoard.width = 500;
//     gameBoard.height = 600;
// const cellSize = 100;
// //const cellGap = 0;
// //const gameGrid = [];

const player = document.getElementById('player');
const gameBoard = document.getElementById('gameBoard');

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
    player.style.left = playerLeft + 'px';
    if (playerLeft >= 400) {
        playerLeft -= 100;
    }
}

function movePlayerLeft() {
    playerLeft -= 100;
    player.style.left = playerLeft + 'px';
    if (playerLeft < 0) {
        playerLeft += 100
    }
} 

function movePlayerDown() {
    playerTop += 100;
    player.style.top = playerTop + 'px';
    if (playerTop >= 400) {
        playerTop -=100;
    }
}

function movePlayerUp() {
    playerTop -= 100;
    player.style.top = playerTop + 'px';
    if (playerTop <=0) {
        playerTop += 100;
    }
}