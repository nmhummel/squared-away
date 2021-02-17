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
    let ss = scores.sort((a,b) => { a.moves - b.moves } )
    ss.forEach(element => {   
        new Score(element.id, element.moves, element.username, element.board_id)
    })
}

 
   
const scoreApi = new ScoreApi(BASE_URL)
scoreApi.getScores();

