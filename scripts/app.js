const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
//Helper to save name of players
const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

//player Config Overlay Element
const playerConfigOverlayElement = document.getElementById("config-overlay");
//Player backDrop Element
const backdropElement = document.getElementById("backdrop");

//Form Element
const formElement = document.querySelector("form");

//Config Errors Paragraph Element
const configErrorsParagraphElement = document.getElementById("config-errors");
//game Over Element article
const gameOverElement = document.getElementById("game-over");

//Game Area Element
const gameAreaElement = document.getElementById("active-game");

const activePlayerNameElement = document.getElementById("active-player-name");

//Start new Game Btn Element
const startNewGameBtnElement = document.getElementById("start-game-btn");
//Edit player 1 button Element
const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
//Edit player 2 button Element
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");

//cancel Config Btn Element
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");

// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");
/*** Start Open modal from config.js ***/

//Open modal from config.js
editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
//Open modal from config.js
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

//Close Modal from config.js
cancelConfigBtnElement.addEventListener("click", closePlayerConfig);

//Close Modal from config.js by click on dark background
backdropElement.addEventListener("click", closePlayerConfig);

/*** End Open modal from config.js ***/

/** Start Save save Player Config  Name */

//save Player Config from config.js
formElement.addEventListener("submit", savePlayerConfig);

/** End Save save Player Config  Name */

//Start game from game.js
startNewGameBtnElement.addEventListener("click", startNewGame);

//game Field Element from game.js
// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }

gameBoardElement.addEventListener("click", selectGameField);
