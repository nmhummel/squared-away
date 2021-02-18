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

    loadNew(event) {
        squares.forEach(sq => {
            sq
        })
        // iterate over all and make sure they're blue.
        // put back all icons/characters
    }

    renderList() {
        this.element.innerHTML = `Board #${this.id}`
        this.element.id = `board-${this.id}` 
        return this.element
    }

    addToDom() {
        boardList.append(this.renderList())

    }



    renderDiscolored() {
        console.log("hi", this)
        debugger
        let discoloredArray = this.discolored.split("-")
        discoloredArray.forEach(ele => {
            let index = parseInt(ele) - 1 
            squares[index].innerHTML = tardisCard
        })    
    }


    winnerDetermined() {
        squares.forEach(sq => {
            if (sq.innerHTML = "") {
                console.log(this)
            }
        } )
    }
    
        makeRandomBoard() {
    }


}



