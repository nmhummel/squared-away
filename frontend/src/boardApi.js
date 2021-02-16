class CategoryApi {

    constructor(BASE_URL){
        this.baseUrl = `${BASE_URL}/categories`
    }
        

    fetchBoards() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
            json["data"].forEach(board => {
                const c = new Category(board.id, board.discolored)
                c.addToDom()

            })
        })
    }


}