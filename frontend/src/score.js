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
        this.element.innerHTML = `<br><b>${moves}</b> by <i>${username}</i> on Board #${board_id}<br>`
        scoreList.appendChild(this.element)
    }

    // const scoreList = document.getElementById("score-container");

    // make this one work
    static sortScores = () => {
        let ss = Score.allScores.sort(function(a,b) {
            return a.moves - b.moves
        })
        // ss. iterate and add to DOM
    }

    enterName() {
        let person = prompt("Enter your user name");
        let score = totalMoves

        if (person == null || person == "" || score == 0) {
            txt = "Score not saved.";
        } else {
            txt = "Great job," + person + "! Score was saved.";
            saveScore();
        }
    }

    checkForWinner() {
        squares.forEach(sq => {
            if (sq.innerHTML = "") {
                Score.renderScore()
            }
        } )
    }
    
    renderScore() {
        console.log(this)
    }
}
// create - new score
// update - update score when repeating a board


      
      