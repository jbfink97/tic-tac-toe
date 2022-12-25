window.addEventListener('load', () => {


    const gameCells = document.querySelectorAll('.gameSquare');
    const playerXdiv = document.querySelector('.X');
    const playerOdiv = document.querySelector('.O');
    const resetButton = document.getElementById('reset');
    let activePlayer = 'X';
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


    // const player = (shape) => {
    //     const takeTurn = () => {
    //         if (shape == 'X') {
    //             cell.textContent = 'X';
    //             playerXdiv.classList.remove('active');
    //             playerOdiv.classList.add('active');
    //         } else {
    //             cell.textContent = 'O';
    //             playerOdiv.classList.remove('active');
    //             playerXdiv.classList.add('active');
    //         }
    //     }
    //     return {takeTurn};
    // }

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
            if (cell.classList.contains('played')) {
                
            } else if (activePlayer == 'X') {
                cell.textContent = 'X';
                cell.classList.add('played');
                playerXdiv.classList.remove('active');
                playerOdiv.classList.add('active');
                activePlayer = 'O';
            } else {
                cell.textContent = 'O';
                cell.classList.add('played');
                playerOdiv.classList.remove('active');
                playerXdiv.classList.add('active');
                activePlayer = 'X';
            }
        })
    })

})