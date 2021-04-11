class ScoreApi {

    constructor(BASE_URL){
        this.baseUrl = `${BASE_URL}/scores`
    }

    getScores() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(scores => createScoreList(scores))
        .catch((error) => { alert(error.message) })
    }
}

function createScoreList(scores){  
    scores.forEach(element => {   
        new Score(element.moves, element.username, element.board_id)
    })
}

function createScore(score, username, currentBoardId){
    let finishedGame = {
        moves: score,
        username: username, 
        board_id: currentBoardId 
    }

    fetch(`${BASE_URL}/scores`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(finishedGame)
    })
    .then(resp => resp.json())
    .then(score => {
        let s = new Score(score.moves, score.username, score.board_id)
        Score.allScores.push(s);
        console.log(Score.allScores)
        Score.sortScores();       
    })
    .catch((error) => { alert(error.message) })
}
   

