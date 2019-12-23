import React, { Component } from 'react';
import qna from './qna.json';
import images from './images';

const animals = ['cat', 'elephant', 'frog', 'giraffe', 'horse', 'kangaroo', 'lion', 'mouse', 'snake', 'turtle', 'whale', 'zebra'];
const letters = animals.map((name) => name.slice(0, 1).toUpperCase);

class Game extends Component {
  constructor() {
    super();

    this.state = {
      answers: ['', '', '', ''],
      correct: 0,
      letter: '',
      score: [],
      round: -1
    };
    this.nextQuestion.bind(this);
  };

  componentDidMount() {
    this.nextQuestion();
  };

  nextQuestion() {
    let myAnimals = [...animals];
    let answers = [0, 0, 0, 0].map(() => myAnimals.splice(Math.floor(Math.random() * myAnimals.length), 1)[0]);
    let correct = Math.floor(Math.random() * 4);
    let letter = answers[correct].slice(0, 1).toUpperCase();
    let round = this.state.round ++;
    this.setState({ answers, correct, letter });
  };

  handleClick(id, e) {
    this.setState(state => ({
      score: [...state.score].concat([
        id == this.state.correct ?
        <i class="material-icons">star</i> :
        <i class="material-icons">star_border</i>
      ])
    }));
    this.nextQuestion();
  }

  render() {
    return (
      <div id="game">
        <div id="board" className="w3-display-middle" style={{ width: 304 }}>
          <div id="question" className="w3-container w3-red">
            <p>Find an animal with letter { this.state.letter }</p>
          </div>
          <div className="w3-cell-row">
            <div className="w3-container w3-cell" style={{width: '50%'}} onClick={this.handleClick.bind(this, 0)}>
              <img src={ (this.state.answers[0] + '.jpg') } style={{ width: 'auto', height: 90 }}/>
            </div>
            <div className="w3-container w3-cell" style={{width: '50%'}} onClick={this.handleClick.bind(this, 1)}>
              <img src={ (this.state.answers[1] + '.jpg') } style={{ width: 'auto', height: 90 }}/>
            </div>
          </div>
          <div className="w3-cell-row">
            <div className="w3-container w3-cell" style={{width: '50%'}} onClick={this.handleClick.bind(this, 2)}>
              <img src={ (this.state.answers[2] + '.jpg') } style={{ width: 'auto', height: 90 }}/>
            </div>
            <div className="w3-container w3-cell" style={{width: '50%'}} onClick={this.handleClick.bind(this, 3)}>
              <img src={ (this.state.answers[3] + '.jpg') } style={{ width: 'auto', height: 90 }}/>
            </div>
          </div>
          <div className="w3-container w3-text-red" style={{ height: 56 }}>
            <p>{ this.state.score }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
