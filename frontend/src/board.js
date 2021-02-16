class Board {
    constructor(id, discolored) {
        this.id = id
        this.discolored = discolored
    }


    fetchBoards() {
        fetch(`${BASE_URL}/boards`)
        .then(resp => resp.json())
        .then(boards => {
            for (const board of boards) {
                let b = new Board(board.id, board.discolored)
            }
        }
        )
    }

    renderBoard(){
        // iterate over all cells and determine which color it should be
    }
// use split to get array of discolored sqaures



}

// displaying scores
// in board constructor, keep track of all