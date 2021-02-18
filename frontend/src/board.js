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
        this.loadNew();
        squares[0].innerHTML = `<img id="player" src="images/100-right.png">`
        this.renderDiscolored();
        alert(`Board #${this.id} loaded`)
        console.log("CLICK", click)
    } 

    loadNew() {
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
        console.log("hi", this)
        let discoloredArray = this.discolored.split("-")
        discoloredArray.forEach(ele => {
            let index = parseInt(ele) - 1 
            squares[index].innerHTML = tardisCard
        })    
    }


    
    // checkForWinner() {
    //     squares.forEach(sq => {
    //         if (sq.innerHTML = "") {
    //             Score.renderScore()
    //         }
    //     } )
    // }


}



