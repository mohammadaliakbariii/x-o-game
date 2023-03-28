const gameBoard = document.querySelector('#gameBoard')
const infoDisplay = document.querySelector('#info')
const startCells = [
    "","","","","","","","",""
]
function createBoard(){
    startCells.forEach((element,index) => {
        const cell = document.createElement('div')
        cell.classList.add('square')
        cell.id = index
        cell.addEventListener('click',addGo)
        gameBoard.append(cell)
    });
}
createBoard()

function addGo(e){
    const goDisplay = document.createElement('div')
    goDisplay.classList.add("cross")
    console.log(e.target)
    e.target.append(goDisplay)
}