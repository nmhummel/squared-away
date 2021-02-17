class Board {

    static allBoards = []
    static gameBoard = document.getElementById('gameBoard')
    
    constructor(id, discolored) {
        this.id = id
        this.discolored = discolored
        Board.allBoards.push(this)

                // setup the html element that will contain the item
        this.element = document.createElement('li')
        this.element.dataset["id"] = id
        this.element.id = `board-${id}`
        this.element.innerHTML = `Board #${id}`
        console.log(this)
        boardChoices.appendChild(this.element)
        this.element.addEventListener('click', this.handleLiClick)


    }
    
    handleLiClick(){
        
    }
    
    renderBoard(){
        // iterate over all cells and determine which color it should be
        // use split to get array of discolored squares
    }
    

   //  show list of boards to choose from
    // static sortBoard = () => {
    //     Board.allBoards.sort(function(a,b) {
    //         return a.id - b.id
    //     })
    // }


    addToDom(){
        Board.gameBoard.append(this.renderBoard())
    }

    setActiveBoard = (e) => {
        let filteredBoard 
        Board.all.forEach(c => {
            if(c.element === this.element && !this.active){
                c.element.classList.add('activated')
                c.active = true
                filteredBoard = c
            }else{
                c.element.classList.remove('activated')
                c.active = false
            }

            Item.filterByBoard(filteredBoard)
        }) 
    }


    


}