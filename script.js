let gameState = ["", "", "", "", "", "", "", "", ""];
let activePlayer = `X`;
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
const boxes = document.querySelectorAll(`.box`);
const htmlXElement = `<h1>X</h1>`;
const htmlOElement = `<h1>O</h1>`;
boxes.forEach((box, index) => {
  box.addEventListener(`click`, () => {
    if (activePlayer === `X` && gameState[index] === ``) {
      gameState[index] = `X`;
      activePlayer = `O`;
      box.insertAdjacentHTML(`afterbegin`, htmlXElement);
    } else if (activePlayer === `O` && gameState[index] === ``) {
      gameState[index] = `O`;
      box.insertAdjacentHTML(`afterbegin`, htmlOElement);
      activePlayer = `X`;
    }

    console.log(gameState);
    console.log(gameState[1]);
  });
});

const playerFactory = function (name, marker) {
  this.name = name;
  this.marker = marker;
};
const player1 = new playerFactory(`player1`, `x`);
const player2 = new playerFactory(`player2`, `o`);
console.log(player1, player2);
