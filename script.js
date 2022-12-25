window.addEventListener('load', () => {


    const gameCells = document.querySelectorAll('.gameSquare');
    const playerXdiv = document.querySelector('.X');
    const playerOdiv = document.querySelector('.O');
    const resetButton = document.getElementById('reset');
    let activePlayer = 'X';
    let winner;
    playerXdiv.classList.add('active');
    const winning_combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]


    const player = (shape) => {
        let totalBoxes =[];
        const name = () => shape;
        const takeTurn = (individualCell) => {
            if (shape == 'X') {
                individualCell.textContent = 'X';
                playerXdiv.classList.remove('active');
                playerOdiv.classList.add('active');
                activePlayer = 'O';
            } else {
                individualCell.textContent = 'O';
                playerOdiv.classList.remove('active');
                playerXdiv.classList.add('active');
                activePlayer = 'X';
            }
            totalBoxes.push(individualCell.dataset.index);
        }
        return { takeTurn, name };
    }

    const playerX = player('X');
    const playerO = player('O');

    resetButton.addEventListener('click', () => {
        gameCells.forEach(cell => {
            cell.textContent = '';
            if (cell.classList.contains('played')) cell.classList.remove('played');
        })
        activePlayer = 'X';
        playerOdiv.classList.remove('active');
        playerXdiv.classList.add('active');
    })

    gameCells.forEach(cell => {
        cell.addEventListener('click', () => {
            let individualCell = cell;
            if (individualCell.textContent.length > 0) {
            } else if (activePlayer == 'X') {
                playerX.takeTurn(individualCell);
            } else {
                playerO.takeTurn(individualCell);
            }
        })
    })

})