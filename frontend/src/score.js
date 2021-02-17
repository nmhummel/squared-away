class Score {

    static allScores = []

    constructor(id, moves, username, board_id) {
        this.id = id
        this.moves = moves
        this.username = username
        this.board_id = board_id
        Score.allScores.push(this)
        console.log(this)
        this.element = document.createElement('li')
        this.element.className = `side-list`
        this.element.innerHTML = `${moves}<br>${username}<br>`
        scoreList.appendChild(this.element)
    }

    // const scoreList = document.getElementById("score-container");


    static sortScores = () => {
        Score.allScores.sort(function(a,b) {
            return a.moves - b.moves
        })
    }

}
// create - new score
// update - update score when repeating a board

