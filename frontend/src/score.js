class Score {

    static allScores = []

    constructor({id, moves, username, board_id}) {
        this.id = id
        this.moves = moves
        this.username = username
        this.board_id = board_id
        Score.allScores.push(this)
    }

    //const BASE_URL = 'http://localhost:3000'
    // read - scoreboard (scores, username)
    fetchScores() {
        fetch(`${BASE_URL}/scores`)
        .then(resp => resp.json())
        .then(scores => {
            for (const score of scores) {
                let s = new Score(score.id, score.moves, score.username, score.board_id)
                s.createScoreboard()
                s.sortScores()
            }
        })
        .catch((error) => { console.log(error.message) })
    }

    createScoreboard() {
     

    }

    static sortScores = () => {
        Score.allScores.sort(function(a,b) {
            return a.moves - b.moves
        })
    }

}
// create - new score
// update - update score when repeating a board

