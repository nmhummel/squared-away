class BoardApi {

    constructor(BASE_URL){
        this.baseUrl = `${BASE_URL}/boards`
    }
        
    getBoards() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(boards => createBoardList(boards))         
    }

}

function createBoardList(boards){
    //debugger    
    let bs = boards.sort((a,b) => { a.id - b.id } )
    bs.forEach(element => {   
        new Board(element.id, element.discolored)
        // let listItem = document.createElement("li")
        // listItem.innerHTML = element.id
        // boardChoices.appendChild(listItem)
        })
}

const boardApi = new BoardApi(BASE_URL)
boardApi.getBoards();