class Score {
    constructor(id, moves, username, board_id) {
    this.id = id
    this.moves = moves
    this.username = username
    this.board_id = board_id
    }

    const BASE_URL = 'http://localhost:3000'
// read - scoreboard (scores, username)
function fetchScores() {
    fetch(`${BASE_URL}/scores`)
    .then(resp => resp.json())
    .then(scores => {console.log("OBJ", scores)}
    //     for (const score of scores) {
    //         console.log("OBJ", score)
    //         let s = new Score(score.id, score.moves, score.username, score.board_id)
    //         console.log("obj", s)
    //     }
    // }
    )
}
// create - new score
// update - update score when repeating a board

}