class Board {
    constructor(id, discolored) {
        this.id = id
        this.discolored = discolored
    }


    fetchScores() {
        fetch(`${BASE_URL}/boards`)
        .then(resp => resp.json())
        .then(boards => {
            for (const board of boards) {
                let b = new Board(board.id, board.discolored)
            }
        }
        )
    }






}