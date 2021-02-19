class Board {

    static allBoards = []
    static gameBoard = document.getElementById('gameBoard')
    
    constructor(id, discolored) {
        this.id = id
        this.discolored = discolored
        Board.allBoards.push(this)

        this.element = document.createElement('li')
        this.element.className = `side-list`
        this.element.addEventListener('click', this.handleLiClick)
    }

    handleLiClick = () => {  
        currentBoardId = this.id
        this.loadNew();
        squares[0].innerHTML = `<img id="player" src="images/100-right.png">`
        this.renderDiscolored();
        alert(`Board #${this.id} loaded`)
    } 

    loadNew() {
        currentPosition = 0;
        score = 0;
        totalMoves.innerHTML = `<p class="light-text">Total Moves: ${score}</p>`
        squares.forEach(sq => {
            if (sq === "div#cell-1") {
                sq.innerHTML = `<img id="player" src="images/100-right.png">`
            }
            else {
                sq.innerHTML = ""
            }
        })
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
        let discoloredArray = this.discolored.split("-")
        discoloredArray.forEach(ele => {
            let index = parseInt(ele) - 1 
            squares[index].innerHTML = tardisCard
        })    
    }
}
