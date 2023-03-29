// import View from "./ttt-view"

const View = require("./ttt-view");
const Game = require("../ttt_node/game");


document.addEventListener("DOMContentLoaded", () => {
  let ttt = document.querySelector(".ttt");
  const game = new Game ();
  const view = new View (game, ttt);
  // view.setupBoard();
  // view.handleClick();
});

