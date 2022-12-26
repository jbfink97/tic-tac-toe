window.addEventListener('load', () => {


    const gameCells = document.querySelectorAll('.gameSquare');
    const playerXdiv = document.querySelector('.X');
    const playerOdiv = document.querySelector('.O');
    const resetButton = document.getElementById('reset');
    const resultsDiv = document.getElementById('result');
    let activePlayer = 'X';
    let winner = '';
    let count = 0;
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
        let totalBoxes = [];
        const takeTurn = (individualCell) => {
            if (shape == 'X') {
                individualCell.textContent = 'X';
                playerXdiv.classList.remove('active');
                playerOdiv.classList.add('active');
                activePlayer = 'O';
                count++;
            } else {
                individualCell.textContent = 'O';
                playerOdiv.classList.remove('active');
                playerXdiv.classList.add('active');
                activePlayer = 'X';
                count++;
            }
            let index = parseInt(individualCell.dataset.index);
            totalBoxes.push(index);

            for (let i = 0; i < winning_combos.length; i++) {
                // console.log(winning_combos[i]);
            if (winning_combos[i].every(r => totalBoxes.includes(r))){
                winner = shape;
                resultsDiv.textContent = `Player ${shape} wins!`;
              }
            }
            if (count == 9) {
                resultsDiv.textContent = "It's a tie!";
            }
        }
        const resetTotalBoxes = () => {
            totalBoxes = [];
        }
        return { takeTurn, resetTotalBoxes };
    }

    const playerX = player('X');
    const playerO = player('O');

    resetButton.addEventListener('click', () => {
        gameCells.forEach(cell => {
            cell.textContent = '';
        })
        activePlayer = 'X';
        winner = '';
        playerX.resetTotalBoxes();
        playerO.resetTotalBoxes();
        count = 0;
        playerOdiv.classList.remove('active');
        playerXdiv.classList.add('active');
        resultsDiv.textContent = '';
    })

    gameCells.forEach(cell => {
        cell.addEventListener('click', () => {
            let individualCell = cell;
            if (individualCell.textContent.length > 0 || winner.length > 0) {
                // skips and does nothing if the cell has a letter in it
                // or if there is a winner
            } else if (activePlayer == 'X') {
                playerX.takeTurn(individualCell);
            } else {
                playerO.takeTurn(individualCell);
            }
        })
    })

})