// Global variables
const winningCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
 ];
 
 let player1, player2, currentPlayer, board;
 
 // Initialize game
 function initGame() {
     player1 = createPlayer('Player 1', 'X');
     player2 = createPlayer('Player 2', 'O');
     currentPlayer = player1;
 
     board = [
         '', '', '',
         '', '', '',
         '', '', '',
     ];
 
     document.querySelector('.turnandwin').textContent = `${currentPlayer.name}'s turn`;
 }
 
 // Create player
 function createPlayer(name, sign) {
     return {
         name: name,
         sign: sign,
         score: 0,
         incrementScore: function() {
             this.score++;
         }
     };
 }
 
 // Switch turn
 function switchTurn() {
     currentPlayer = currentPlayer === player1 ? player2 : player1;
     document.querySelector('.turnandwin').textContent = `${currentPlayer.name}'s turn`;
 }
 
 // Make move
 function makeMove(currentPlayer, index) {
     if (board[index] === '') {
         board[index] = currentPlayer.sign;
         document.querySelector(`.gamecell[data-cell-id="${index}"]`).textContent = currentPlayer.sign;
         
         // Check for a win or draw
         if (checkWin(currentPlayer.sign)) {
             alert(`${currentPlayer.name} wins!`);
             currentPlayer.incrementScore();
             updateScoreDisplay();
             resetGame();
         } else if (isBoardFull()) {
             alert('Draw!');
             resetGame();
         } else {
             switchTurn();
         }
     }
 }
 
 // Check win
 function checkWin(sign) {
     return winningCombinations.some(combination =>
         combination.every(index => board[index] === sign)
     );
 }
 
 // Check if board is full
 function isBoardFull() {
     return board.every(cell => cell !== '');
 }
 
 // Reset game
 function resetGame() {
     board.fill('');
     document.querySelectorAll('.gamecell').forEach(cell => cell.textContent = '');
     initGame();
 }
 
 // Update score display
 function updateScoreDisplay() {
     document.getElementById('p1').textContent = `Player 1: ${player1.score}`;
     document.getElementById('p2').textContent = `Player 2: ${player2.score}`;
 }
 
 // Event delegation for cell clicks
 document.querySelector('.gameboard').addEventListener('click', function(event) {
     if (event.target.classList.contains('gamecell')) {
         const index = parseInt(event.target.getAttribute('data-cell-id'));
         makeMove(currentPlayer, index);
     }
 });
 
 // Reset button
 document.querySelector('.reset').addEventListener('click', resetGame);
 
 // Initialize game
 initGame();
 