class Score {

    static allScores = []

    constructor(id, moves, username, board_id) {
        this.id = id
        this.moves = moves
        this.username = username
        this.board_id = board_id
        Score.allScores.push(this)
        
        this.element = document.createElement('li')
        this.element.className = `side-list`
        this.element.innerHTML = `<b>${moves}</b> by <i>${username}</i> on Board #${board_id}`
        scoreList.appendChild(this.element)
    }

    // make this one work
    static sortScores = () => {
        Score.allScores.sort(function(a,b) {
            return a.moves - b.moves
        })
        // ss. iterate and add to DOM
    }

}

// update - update score when repeating a board
