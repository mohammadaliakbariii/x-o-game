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
    checkScore()
}

function checkScore(){
    const allSquares = document.querySelectorAll(".square")
    winning = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    console.log()
    winning.forEach((array) =>{
        const circleWins = array.every(cell => allSquares[cell].firstChild ?. classList.contains('circle'))
        if (circleWins){
            infoDisplay.textContent = 'circle wins'
    
        }
       
    })

    winning.forEach((array) =>{
        const crossWins = array.every(cell => allSquares[cell].firstChild ?. classList.contains('cross'))
        if (crossWins){
            infoDisplay.textContent = 'cross wins'
        }
       
    })
        }
    
    

