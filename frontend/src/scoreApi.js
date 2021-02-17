class ScoreApi {

    constructor(BASE_URL){
        this.baseUrl = `${BASE_URL}/scores`
    }
    //const BASE_URL = 'http://localhost:3000'
    // read - scoreboard (scores, username)
    getScores() {
        fetch(`${BASE_URL}/scores`)
        .then(resp => resp.json())
        .then(scores => {
            for (const score of scores) {
                let s = new Score(score.id, score.moves, score.username, score.board_id)
                s.renderScoreList() 
                s.sortScores()
            }
        })
        .catch((error) => { console.log(error.message) })
    }
}
        
const scoreApi = new ScoreApi(BASE_URL)
scoreApi.getScores();
