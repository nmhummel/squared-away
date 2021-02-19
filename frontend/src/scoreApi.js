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

function createScore(e){
    e.preventDefault()
    // const scoreInput = e.target.moves
    // const usernameInput = e.target.moves
    // const currentScore = scoreInput.value
    const usernameEntered = document.getElementById("username-entered").value


    let finishedGame = {
        moves: score,
        username: usernameEntered, //or person
        board_id: currentBoardId // or this.board_id
    }
    debugger
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
        let s = new Score(score.id, score.moves, score.username, score.board_id)
        allScores.push(s);
        console.log(s);
    })
    .catch((error) => { console.log(error.message) })
}
   

