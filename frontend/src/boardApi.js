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
        let b = new Board(element.id, element.discolored)
        b.addToDom()
        })
}

