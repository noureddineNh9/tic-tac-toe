const cells = document.querySelectorAll('[data-cell]');
const board = document.querySelector('#board');
const winningMessage = document.querySelector(".winning-message")
const winningText = document.querySelector(".winning-message-text")
const restartBtn = document.getElementById('restartBtn')


const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

var XPalyerTurn 


startGame();

restartBtn.addEventListener('click', startGame)

function startGame(){
    XPalyerTurn = true;
    console.log('start');
    cells.forEach(cell => {
        cell.classList.remove('x')
        cell.classList.remove('o')
        cell.removeEventListener('click', handleCellClick)
        cell.addEventListener('click', handleCellClick, { once: true })
    })
    winningMessage.classList.remove('show')


}

function isWin (currentClass){

    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass);
        })
    })

}

function isDraw() {
    return [...cells].every(cell => {
      return cell.classList.contains('x') || cell.classList.contains('o')
    })
}


function endGame (){

    return false;
}

function handleCellClick(e) {
    
    var currentClass = XPalyerTurn ? 'x' : 'o';
    e.target.classList.add(currentClass)

    if(isWin(currentClass))
    {
        winningText.textContent = `${XPalyerTurn ? "X's" : "O's"} Win!`
        winningMessage.classList.add('show')
    }else if(isDraw()){
        console.log(isDraw());
        winningText.textContent = `Draw!`
        winningMessage.classList.add('show')

    }else{
        

        XPalyerTurn = !XPalyerTurn;
        
        board.classList.remove('x')
        board.classList.remove('o')
        if(XPalyerTurn)
            board.classList.add('x')
        else
            board.classList.add('o')

    }

}



cells.forEach(cell => {
    cell.addEventListener('click',handleCellClick, {once: true})
})