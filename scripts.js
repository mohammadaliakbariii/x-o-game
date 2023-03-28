const gameBoard = document.querySelector('#gameBoard')
const infoDisplay = document.querySelector('#info')
const startCells = [
    "","","","","","","","",""
]

let go = 'circle'
infoDisplay.textContent = 'circle goes first'

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
    goDisplay.classList.add(go)
    console.log(e.target)
    e.target.append(goDisplay)
    go = go === "circle" ? 'cross':'circle';
    infoDisplay.textContent = "its " +go+"'s turn"
    e.target.removeEventListener('click', addGo)
}