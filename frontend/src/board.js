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

    static handleLiClick = (e) => {   // rewrite as arrow function
        e.target = this.id
        console.log(this)
    } 
    
    renderList() {
        this.element.innerHTML = `Board #${this.id}`
        this.element.id = `board-${this.id}`
        return this.element
    }

    //const boardList = document.getElementById('board-container');
    addToDom() {
        boardList.append(this.renderList())
        // Board.gameBoard.append(this.renderBoard())
 
    }
    
    renderBoard() {
        // iterate over all cells and determine which color it should be
        // use split to get array of discolored squares
    }
    

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


