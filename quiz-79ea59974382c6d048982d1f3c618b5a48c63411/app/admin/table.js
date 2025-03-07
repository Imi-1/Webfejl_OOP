class Table{
    #manager

    constructor(manager){

        this.#manager=manager
        const tbody= Gomszab.makeTableWithHeader(["Kerdes", "valasz1","valasz2","valasz3","valasz4", "helyesvalasz"])
        this.#manager.setAddCallback((question) => {
            const tableRow = document.createElement("tr")
            tbody.appendChild(tableRow)

            Gomszab.makeCellToRow(tableRow,question.questionText)
            for(const answer of question.answers){
                Gomszab.makeCellToRow(tableRow, answer)
            }
            Gomszab.makeCellToRow(tableRow, question.rightAnswer)
        })
    }
}