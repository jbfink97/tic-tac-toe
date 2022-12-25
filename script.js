window.addEventListener('load', () => {

    const resetButton = document.getElementById('reset');
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

    const gameCells = document.querySelectorAll('.gameSquare');

    resetButton.addEventListener('click', () => {
        gameCells.forEach(cell => {
            cell.textContent = '';
            if (cell.classList.contains('played')) cell.classList.remove('played');
        })
    })

    gameCells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent.length == 0) {
                cell.textContent = 'X';
                cell.classList.add('played');
            } else {
                cell.textContent = '';
                cell.classList.remove('played');
            }
        })
    })




})