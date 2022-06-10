const display = {
    app: () => {
        const app = document.createElement('div')
        app.id = 'app'
        document.body.appendChild(app)
    },
    container: () => {
        const container = document.createElement('div')
        container.id = 'container'
        app.appendChild(container)
    },
    tittle: () => {
        const title = document.createElement('h1')
        title.innerText = 'Tic Tac Toe'
        container.appendChild(title)
    },
    board: () => {
        const board = document.createElement('div')
        board.id = 'board'
        boardSquares = []
        container.appendChild(board)

        for (let i = 0; i < 9; i++) {
            boardSquares[i] = document.createElement('div')
            boardSquares[i].id = i
            boardSquares[i].className = 'square'
            boardSquares[i].innerText = ''
            boardSquares[i].addEventListener('click', playerMove)
            board.appendChild(boardSquares[i])
        }
    },
    restartButton: () => {
        const restart = document.createElement('button')
        restart.innerText = 'restart'
        restart.id = 'restart-btn'
        restart.addEventListener('click', display.restartGame)
        container.appendChild(restart)
    },
    restartGame: () => {
        for (let i = 0; i < 9; i++) {
            boardSquares[i].innerText = ''
            boardSquares[i].addEventListener('click', playerMove)
        }

        clearBoardValues()
    },
}