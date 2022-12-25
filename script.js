window.addEventListener('load', () => {

    const playerX = document.querySelector('.X');
    const playerO = document.querySelector('.O');
    const resetButton = document.getElementById('reset');
    let activePlayer = 'X';
    playerX.classList.add('active');
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
        const takeTurn = () => {
            if (shape == 'X') {
                cell.textContent = 'X';
            }
        }
        const active = () => {
            if (playerX.classList.contains('active')){
                playerX.classList.remove('active');
                playerO.classList.add('active');
            } else {
                playerO.classList.remove('active');
                playerX.classList.add('active');
            }
        }
    }

    const gameCells = document.querySelectorAll('.gameSquare');

    resetButton.addEventListener('click', () => {
        gameCells.forEach(cell => {
            cell.textContent = '';
            if (cell.classList.contains('played')) cell.classList.remove('played');
        })
        activePlayer = 'X';
        playerO.classList.remove('active');
        playerX.classList.add('active');
    })

    gameCells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.classList.contains('played')) {
                
            } else if (player == 'X') {
                cell.textContent = 'X';
                cell.classList.add('played');
                playerX.classList.remove('active');
                playerO.classList.add('active');
                activePlayer = 'O';
            } else {
                cell.textContent = 'O';
                cell.classList.add('played');
                playerO.classList.remove('active');
                playerX.classList.add('active');
                activePlayer = 'X';
            }
        })
    })




})