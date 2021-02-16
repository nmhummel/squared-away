
document.addEventListener("DOMContentLoaded", () => {
   
    //fetchBoards()
})



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

const dalek = document.getElementById('dalek');
const gameBoard = document.getElementById('gameBoard');

let dalekLeft = 0;
let dalekTop = 0;

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDalekLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDalekRight();
    }
    else if (e.key === "ArrowDown") {
        moveDalekDown();
    }
    else if (e.key === "ArrowUp") {
        moveDalekUp();
  }); 

function moveDalekLeft() {
    dalekLeft -= 100;
    dalek.style.left = dalekLeft + 'px';
    if (dalekLeft <= 0) {
        dalekLeft += 100
    }
} 

function moveDalekRight() {
    dalekLeft += 100;
    dalek.style.left = dalekLeft + 'px';
    if (dalekLeft >= 400) {
        dalekLeft -= 100;
    }
}

function moveDalekDown() {
    dalekTop += 100;
    dalek.style.top = dalekTop + 'px';
    if (dalekTop >= 500) {
        dalekTop -=100;
    }
}

function moveDalekUp() {
    dalekTop -= 100;
    dalek.style.top = dalekTop + 'px'
    if (dalekTop <=0) {
        dalekTop += 100;
    } 
}