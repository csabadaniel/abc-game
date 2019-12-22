import React, { Component } from 'react';
import qna from './qna.json';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      nextQuestion: 0,
      score: 'Score: '
    }
  }

  handleClick(id, e) {
    this.setState(state => ({
      score: state.score.concat(
        id == qna[state.nextQuestion].correct ?
        '+' :
        '-'
      )
    }));
  }

  render() {
    return (
      <div id="game">
        <div id="board" className="w3-display-middle w3-yellow" style={{ width: 600 }}>
          <div id="question" className="w3-container w3-red">
            <p>{ qna[0].question }</p>
          </div>
          <div className="w3-cell-row">
            <div className="w3-container w3-cell w3-button w3-hover-red" style={{width: '50%'}} onClick={this.handleClick.bind(this, 0)}>
              <p>{ qna[0].answers[0] }</p>
            </div>
            <div className="w3-container w3-cell w3-button w3-hover-red" style={{width: '50%'}} onClick={this.handleClick.bind(this, 1)}>
              <p>{ qna[0].answers[1] }</p>
            </div>
          </div>
          <div className="w3-cell-row">
            <div className="w3-container w3-cell w3-button w3-hover-red" style={{width: '50%'}} onClick={this.handleClick.bind(this, 2)}>
              <p>{ qna[0].answers[2] }</p>
            </div>
            <div className="w3-container w3-cell w3-button w3-hover-red" style={{width: '50%'}} onClick={this.handleClick.bind(this, 3)}>
              <p>{ qna[0].answers[3] }</p>
            </div>
          </div>
          <div className="w3-container w3-red">
            <p>{ this.state.score }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
