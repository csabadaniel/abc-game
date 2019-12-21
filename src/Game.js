import React, { Component } from 'react';
import Board from './Board';
import Score from './Score';

class Game extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="game">
        <Board/>
        <Score/>
      </div>
    );
  }
}

export default Game;
