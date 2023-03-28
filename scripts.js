const gameBoard = document.querySelector('#gameBoard')
const infoDisplay = document.querySelector('#info')
const startCells = [
    "","","","","","","","",""
]
function createBoard(){
    startCells.forEach(element => {
        const cell = document.createElement('div')
        cell.classList.add('square')
        gameBoard.append(cell)
    });
}
createBoard()