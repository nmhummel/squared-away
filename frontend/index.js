
document.addEventListener("DOMContentLoaded", () => {
     fetchScores()
})

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

// update - update score whe repeating a board
