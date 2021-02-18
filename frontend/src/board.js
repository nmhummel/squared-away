class Board {

    static allBoards = []
    static gameBoard = document.getElementById('gameBoard')
    
    constructor(id, discolored) {
        this.id = id
        this.discolored = discolored
        Board.allBoards.push(this)
        console.log(this)

        this.element = document.createElement('li')
        this.element.className = `side-list`
        
        this.element.addEventListener('click', this.handleLiClick)
    }

    handleLiClick = (event) => {   // rewrite as arrow function
        let click = event.target
        this.renderDiscolored();
        alert(`Board #${this.id} loaded`)
        console.log("CLICK", click)
    } 

    renderList() {
        this.element.innerHTML = `Board #${this.id}`
        this.element.id = `board-${this.id}` 
        return this.element
    }

    //const boardList = document.getElementById('board-container');
    addToDom() {
        boardList.append(this.renderList())
        // Board.gameBoard.append(this.renderDiscolored())
 
    }
    
    // HALP!!!
    static arrayOfDiscolored = []

    renderDiscolored() {
        // iterate over all cells and determine which color it should be - const squares = []?
        // use split to get array of discolored squares
        console.log("hi", this)
        debugger
        //let discoloreds = Board.allBoards.filter(n => n)
        Board.allBoards.forEach(ele => {
            let board = ele.discolored.split("-")
            console.log(board)
            arrayOfDiscolored.push(board)
        })      
    }
           // array of all cells
            // access any cell that matches array index of element
            //let index = parseInt(element) - 1 
     
    
    

}







    // setActiveBoard = (e) => {
    //     let filteredBoard 
    //     Board.all.forEach(c => {
    //         if(c.element === this.element && !this.active){
    //             c.element.classList.add('activated')
    //             c.active = true
    //             filteredBoard = c
    //         }else{
    //             c.element.classList.remove('activated')
    //             c.active = false
    //         }

    //         Item.filterByBoard(filteredBoard)
    //     }) 
    // }


