class ScoreApi {

    constructor(BASE_URL){
        this.baseUrl = `${BASE_URL}/scores`
    }

    getScores() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(scores => createScoreList(scores))
        .catch((error) => { console.log(error.message) })
    }
}

function createScoreList(scores){  
    let ss = scores.sort((a,b) => { return a.moves - b.moves } )
    ss.forEach(element => {   
        new Score(element.moves, element.username, element.board_id)
    })
}

function createScore(score, username, currentBoardId){
    //e.preventDefault()
    //const usernameEntered = document.getElementById("username-entered").value

    let finishedGame = {
        moves: score,
        username: username, 
        board_id: currentBoardId 
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
        let s = new Score(score.moves, score.username, score.board_id)
        allScores.push(s);
        //allScores.sortScores; // not sorting upon adding
        formContainer.style.display = "none";    
    })
    .catch((error) => { console.log(error.message) })
}
   

