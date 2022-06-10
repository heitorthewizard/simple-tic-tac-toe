let boardValues = [
    '', '', '',
    '', '', '',
    '', '', ''
]

const winningMatches = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let gameOver = false

let player = 'X'

let winner = 'No One'

let checks = 0

const sequences = []

function playerMove() {
    this.innerText = player
    this.removeEventListener('click', playerMove)

    if (player === 'X') {
        boardValues[this.id] = 'X'
    } else {
        boardValues[this.id] = 'O'
    }

    checkWinner()

    switchPlayer()

    if (gameOver == true) {
        setTimeout(() => {
            alert('Winner: ' + winner)
        }, 200)
    }
}

function switchPlayer() {
    if (player === 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
}

function checkWinner() {
    for (let i = 0; i < winningMatches.length; i++) {
        let sequences = winningMatches[i]

        if (
            boardValues[sequences[0]] == 'X' &&
            boardValues[sequences[1]] == 'X' &&
            boardValues[sequences[2]] == 'X'
        ) {
            gameOver = true
            winner = 'X'
        } else if (
            boardValues[sequences[0]] == 'O' &&
            boardValues[sequences[1]] == 'O' &&
            boardValues[sequences[2]] == 'O'
        ) {
            gameOver = true
            winner = 'O'
        }
    }

    checks += 1

    if (checks == 9) {
        gameOver = true
    }
}

function clearBoardValues() {
    boardValues = [
        '', '', '',
        '', '', '',
        '', '', ''
    ]

    gameOver = false
    winner = 'No One'
    checks = 0
    player = 'X'
}