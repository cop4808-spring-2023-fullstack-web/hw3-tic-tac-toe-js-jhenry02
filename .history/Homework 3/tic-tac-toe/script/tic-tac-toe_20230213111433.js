const statusDisplay = document.querySelector('.status');

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// handles the click of the cell
function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}


/*This function has the responsibility of scanning to see which move is optimized
for the computer to proceed with*/
function handleResultValidation() {
    /*
    let roundWon = false
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
        continue;
        }
        if (a === b && b === c) {
        roundWon = true;
        break
        }
        
    }*/
    checkWin(); {
        if (gameActive) {
            handlePlayerChange();
        }
        handleComputerMove();
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        statusDisplay.style.color = "rgb(251,100,204)";
        return;
    }





    function handleComputerPlay() {
        pickMove();
        handleResultValidation();
    }
    //
    function pickCompMove() {
        while (true) {
            var move = Math.floor(Math.random() * 8);
            if (gameState[move] === "") {
                break;
            }
        }

        //code that checks to see if the cell is empty/a valid move
        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }
        gameState[move] = currentPlayer;
        document.getElementById(move).innerHTML = currentPlayer;
        //querySelector(".cell").getAttribute(move).value = currentPlayer;
    }
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));


    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.style.color = "rgb(65, 65, 65)";
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.restart').addEventListener('click', handleRestartGame);
}