const message = document.querySelector(`.message`);
const resetButton = document.querySelector(`.reset-button`);
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameState = true;
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
      console.log(`xdd`);
      gameState = false;
    }
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
        gameBoard[index] = player1.marker;
        activePlayer.name = `player2`;
        box.insertAdjacentHTML(`afterbegin`, htmlXElement);
        checkWinner();
        message.textContent = `Player 2 turn`;
        if (gameState === false) {
          message.textContent = `Player 1 won`;
        }
      } else if (activePlayer.name === `player2` && gameBoard[index] === ``) {
        gameBoard[index] = player2.marker;
        box.insertAdjacentHTML(`afterbegin`, htmlOElement);
        activePlayer.name = `player1`;
        checkWinner();
        message.textContent = `Player 1 turn`;
        if (gameState === false) {
          message.textContent = `Player 2 won`;
        }
      }
    }
    console.log(gameBoard);
  });
});

resetButton.addEventListener(`click`, () => {
  gameState = true;
  activePlayer = player1;
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  boxes.forEach((box, index) => {
    box.innerHTML = ``;
  });
  message.textContent = `Game restarted, Player 1 turn`;
});
