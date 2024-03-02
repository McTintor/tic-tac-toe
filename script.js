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

function createPlayer(name, sign) {
    let turn = false; // Initially, it's not this player's turn
    let score = 0; // Initial score is 0
    
    function incrementScore() {
      score++;
    }
  
    return {
      name: name,
      sign: sign,
      getTurn: function() {
        return turn;
      },
      setTurn: function(newTurn) {
        turn = newTurn;
      },
      getScore: function() {
        return score;
      },
      incrementScore: incrementScore
    };
  }
  
function playGame() {
    const player1 = createPlayer('Player 1', 'X');
    const player2 = createPlayer('Player 2', 'O');
    let currentPlayer = player1;

    const board = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];

    makeMove(currentPlayer);
    switchTurn(currentPlayer);
}

function switchTurn(currentPlayer) {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }

function makeMove(currentPlayer) {
    if (currentPlayer === player1) {

    }
}