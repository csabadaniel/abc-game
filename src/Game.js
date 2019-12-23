import React, { Component } from 'react';
import qna from './qna.json';
import images from './images';

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
        <div id="board" className="w3-display-middle" style={{ width: 600 }}>
          <div id="question" className="w3-container w3-red">
            <p>{ qna[0].question }</p>
          </div>
          <div className="w3-cell-row">
            <div className="w3-container w3-cell" style={{width: '50%'}} onClick={this.handleClick.bind(this, 0)}>
              <img src={ (qna[0].answers[0] + '.jpg') }/>
            </div>
            <div className="w3-container w3-cell" style={{width: '50%'}} onClick={this.handleClick.bind(this, 1)}>
              <img src={ (qna[0].answers[1] + '.jpg') }/>
            </div>
          </div>
          <div className="w3-cell-row">
            <div className="w3-container w3-cell" style={{width: '50%'}} onClick={this.handleClick.bind(this, 2)}>
              <img src={ (qna[0].answers[2] + '.jpg') }/>
            </div>
            <div className="w3-container w3-cell" style={{width: '50%'}} onClick={this.handleClick.bind(this, 3)}>
              <img src={ (qna[0].answers[3] + '.jpg') }/>
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
