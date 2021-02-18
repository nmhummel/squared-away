class ScoreApi {

    constructor(BASE_URL){
        this.baseUrl = `${BASE_URL}/scores`
    }
    //const BASE_URL = 'http://localhost:3000'
    // read - scoreboard (scores, username)
    getScores() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(scores => createScoreList(scores))
        //.catch((error) => { console.log(error.message) })
    }
}

function createScoreList(scores){
    //debugger    
    let ss = scores.sort((a,b) => { return a.moves - b.moves } )
    ss.forEach(element => {   
        new Score(element.id, element.moves, element.username, element.board_id)
    })
}

function saveScore(){
    e.preventDefault()
    // const scoreInput = e.target.moves
    // const usernameInput = e.target.moves
    // const currentScore = scoreInput.value
    // const currentUsername = usernameInput.value

    let game = {
        moves: this.moves,
        username: this.username,
        board_id: this.board_id
    }
    fetch(`${BASE_URL}/scores`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    })
    .then(resp => resp.json())
    .then(score => {
        let s = new Score(score.id, score.moves, score.username, score.board_id)
        s.renderScore();
    })
    .catch((error) => { console.log(error.message) })
}
   
const scoreApi = new ScoreApi(BASE_URL)
scoreApi.getScores();

