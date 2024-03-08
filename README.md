# Tic Tac Toe Game

This is a simple implementation of the classic Tic Tac Toe game using HTML, CSS, and JavaScript.

Live version here: https://mctintor.github.io/tic-tac-toe/

## How to Play

- The game is played on a 3x3 grid.
- Players take turns marking a square with their symbol (either X or O).
- The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins the game.
- If all squares are filled and no player has achieved a win, the game is a draw.

## Features

- Two players can play against each other.
- Scores are displayed for each player.
- The game can be reset at any time.

## Game Logic

The game logic is handled in JavaScript. Here's a brief overview of the main functions:

- `initGame()`: Initializes the game by setting up players, the game board, and displaying whose turn it is.
- `createPlayer(name, sign)`: Creates a player object with a name, symbol, and score.
- `switchTurn()`: Switches the current player after each move.
- `makeMove(currentPlayer, index)`: Handles the player's move, checks for a win or draw, and updates the score.
- `checkWin(sign)`: Checks if a player has won by checking all possible winning combinations.
- `isBoardFull()`: Checks if the game board is full, indicating a draw.
- `resetGame()`: Resets the game board and scores to start a new game.
- `updateScoreDisplay()`: Updates the score display on the HTML page.
- Event listeners are set up for clicking on game cells and resetting the game.

## Usage

To play the game, simply open the HTML file in a web browser. Click on the cells of the grid to make your moves. The game will automatically update the scores and display the winner or a draw when appropriate. Use the reset button to start a new game.

Have fun playing Tic Tac Toe!
