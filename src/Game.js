import React, { Component } from 'react';
import qna from './qna.json';
import images from './images';

const animals = ['cat', 'elephant', 'frog', 'giraffe', 'horse', 'kangaroo', 'lion', 'mouse', 'snake', 'turtle', 'whale', 'zebra'];
const letters = animals.map((name) => name.slice(0, 1).toUpperCase);

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
        <div id="board" className="w3-display-middle" style={{ width: 304 }}>
          <div id="question" className="w3-container w3-red">
            <p>{ qna[0].question }</p>
          </div>
          <div className="w3-cell-row">
            <div className="w3-container w3-cell" style={{width: '50%'}} onClick={this.handleClick.bind(this, 0)}>
              <img src={ (qna[0].answers[0] + '.jpg') } style={{ width: 'auto', height: 90 }}/>
            </div>
            <div className="w3-container w3-cell" style={{width: '50%'}} onClick={this.handleClick.bind(this, 1)}>
              <img src={ (qna[0].answers[1] + '.jpg') } style={{ width: 'auto', height: 90 }}/>
            </div>
          </div>
          <div className="w3-cell-row">
            <div className="w3-container w3-cell" style={{width: '50%'}} onClick={this.handleClick.bind(this, 2)}>
              <img src={ (qna[0].answers[2] + '.jpg') } style={{ width: 'auto', height: 90 }}/>
            </div>
            <div className="w3-container w3-cell" style={{width: '50%'}} onClick={this.handleClick.bind(this, 3)}>
              <img src={ (qna[0].answers[3] + '.jpg') } style={{ width: 'auto', height: 90 }}/>
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
