const message = document.querySelector(`.message`);
const resetButton = document.querySelector(`.reset-button`);
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameState = true;
//Players constructor
const playerFactory = function (name, marker) {
  this.name = name;
  this.marker = marker;
};
/// Creating players
const player1 = new playerFactory(`player1`, `x`);
const player2 = new playerFactory(`player2`, `o`);
/// Setting active player to player number1
let activePlayer = player1;

message.textContent = `Player 1 turn`;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  for (let combo of winningCombinations) {
    if (
      gameBoard[combo[0]] &&
      gameBoard[combo[0]] === gameBoard[combo[1]] &&
      gameBoard[combo[0]] === gameBoard[combo[2]]
    ) {
      gameState = false;
      if (activePlayer.name === `player1`) {
        return (message.textContent = `Player 1 won`);
      } else if (activePlayer.name === `player2`) {
        return (message.textContent = `Player 2 won`);
      }
    }
  }
};
const checkDraw = () => {
  let tempGameBoard = gameBoard.filter((symbol) => {
    return symbol === ``;
  });
  if (
    tempGameBoard.length === 0 &&
    message.textContent === `Player 1 won` &&
    message.textContent === `Player 2 won`
  ) {
    gameState = false;
    message.textContent = `It is a draw`;
  }
};

const boxes = document.querySelectorAll(`.box`);
const htmlXElement = `<h1>X</h1>`;
const htmlOElement = `<h1>O</h1>`;

/// Creating the game
boxes.forEach((box, index) => {
  box.addEventListener(`click`, () => {
    if (gameState === true) {
      if (activePlayer.name === `player1` && gameBoard[index] === ``) {
        gameBoard[index] = activePlayer.marker;
        box.insertAdjacentHTML(`afterbegin`, htmlXElement);
        message.textContent = `Player 2 turn`;
        checkWinner();
        checkDraw();
        activePlayer = player2;
      } else if (activePlayer.name === `player2` && gameBoard[index] === ``) {
        gameBoard[index] = player2.marker;
        box.insertAdjacentHTML(`afterbegin`, htmlOElement);
        message.textContent = `Player 1 turn`;
        checkWinner();
        checkDraw();
        activePlayer = player1;
      }
    }
  });
});

//Resetting the game
resetButton.addEventListener(`click`, () => {
  gameState = true;
  activePlayer = player1;
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  boxes.forEach((box) => {
    box.innerHTML = ``;
  });
  message.textContent = `Game restarted, Player 1 turn`;
});
