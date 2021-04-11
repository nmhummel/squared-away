class Score {

    static allScores = []

    constructor(moves, username, board_id) {
        this.moves = moves
        this.username = username
        this.board_id = board_id
        Score.allScores.push(this)
        console.log(Score.allScores)
        this.element = document.createElement('li')
        this.element.className = `side-list`
        this.element.innerHTML = `<b>${moves}</b> by <i>${username}</i> on Board #${board_id}`
        scoreList.appendChild(this.element) //pointless
    }

    static sortScores = () => {
        Score.allScores = Score.allScores.sort(function(a,b) {
            return a.moves - b.moves
        })
        scoreList.innerHTML = `<div class="dark-text">Top Scores</div>`
        this.allScores.forEach((score) => {
            scoreList.appendChild(score.element)
        })
    }

}

//double adding to array - fix!!!

// update - update score when repeating a board
