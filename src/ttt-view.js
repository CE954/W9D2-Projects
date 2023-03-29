// import Board from "../ttt_node/board";
// import Game from "../ttt_node/game";

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {
    // let list = document.getElementById('list');
    let list = document.createElement('ul');
    list.setAttribute('id', 'list')

    for(let i = 0; i < 9; i++) {
        let li = document.createElement('li'); 
        let position = [Math.floor(i/3), i % 3];
        let posString = JSON.stringify(position);
        li.dataset.pos = posString;
        // li.classList.add('li');
        list.appendChild(li);
    }

    this.el.appendChild(list);
    
  }
  
  bindEvents() {
    const parent = document.getElementById('list')
    parent.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick(e) {
      if (e.target.id === 'list') {
        alert('please select a square');
      } else {
        if(e.target.classList.value === 'x' || e.target.classList.value === 'o'){
          alert('Is not valid position!');
        } else {
          let value = JSON.parse(e.target.dataset.pos)
          this.game.playMove(value);
          let mark = this.game.currentPlayer;
          e.target.classList.add(mark);
          e.target.innerHTML = mark;
        }
      }
  }

  makeMove(square) {
  //   if(e.target.classList.value === 'x' || e.target.classList.value === 'o'){
  //     alert('Is not valid position!');
  //   } else {
  //   let value = JSON.parse(square)
  //   this.game.playMove(value);
  //   let mark = this.game.currentPlayer;
  //   e.target.classList.add(mark);
  //   e.target.innerHTML = mark;
    
  }

}

module.exports = View;
