class Score {

    static allScores = []

    constructor({id, moves, username, board_id}) {
        this.id = id
        this.moves = moves
        this.username = username
        this.board_id = board_id
        Score.allScores.push(this)
        console.log(this)
    }

    // const scoreList = document.getElementById("score-container");
    renderScoreList() {
        scoreList.innerHTML +=
        `<ul class="side-list">
          <li>
            <h3>${this.moves}</h3>
            ${this.username}<br>
          </li><br>
        </ul>`
    }

    static sortScores = () => {
        Score.allScores.sort(function(a,b) {
            return a.moves - b.moves
        })
    }

}
// create - new score
// update - update score when repeating a board

