import React, { Component } from 'react';
import qna from './qna.json';
import images from './images';
import sounds from './sounds';

const animals = ['cat', 'elephant', 'frog', 'giraffe', 'horse', 'kangaroo', 'lion', 'mouse', 'snake', 'turtle', 'whale', 'zebra'];
const letters = animals.map((name) => name.slice(0, 1).toUpperCase);

const INIT = 'init';
const INTRO = 'intro';
const RENDER = 'render';
const QUESTION = 'question';
const WAIT = 'wait';
const ANSWER = 'answer';
const SCORE = 'score';
const REPLAY = 'replay';

class Game extends Component {

  constructor() {
    super();

    this.initialState = {
      answers: ['', '', '', ''],
      correct: 0,
      letter: '',
      score: [],
      state: INTRO
    };

    this.audio = new Audio();

    this.state = {...this.initialState};
    this.nextQuestion.bind(this);
    this.showReplay.bind(this);
    this.reset.bind(this);
  };

  componentDidMount() {
    this.audio.src = sounds.intro;
    this.audio.play();
    this.audio.onended = this.soundEnded.bind(this);
  };

  soundEnded() {
    if (this.state.state == INTRO) {
      this.setState({ state: QUESTION });
      this.nextQuestion();
    } else if (this.state.state == QUESTION) {
      this.setState({ state: WAIT});
    } else if (this.state.state == SCORE) {
      if (this.state.score.length < 10) {
        this.setState({ state: QUESTION });
        this.nextQuestion();
      } else {
        this.setState({ state: REPLAY });
        this.showReplay();
      }
    }
  }

  nextQuestion() {
    let myAnimals = [...animals];
    let answers = [0, 0, 0, 0].map(() => myAnimals.splice(Math.floor(Math.random() * myAnimals.length), 1)[0]);
    let correct = Math.floor(Math.random() * 4);
    let letter = answers[correct].slice(0, 1).toUpperCase();
    console.log(sounds.letters[answers[correct]]);
    this.audio.src = sounds.letters[answers[correct]];
    this.audio.play();
    this.setState({ answers, correct, letter });
  };

  showReplay() {
    if (this.state.score.length == 10)
      this.setState({score: [...this.state.score].concat([
        <i className="material-icons" key={this.state.score.length} onClick={this.reset.bind(this)}>replay</i>
      ])});
  }

  handleClick(id, e) {
    if (this.state.state == WAIT) {
      if (this.state.score.length < 10) {
        let correct = (id == this.state.correct);
        this.setState(state => ({
          score: [...state.score]
            .concat([
              correct ?
              <i className="material-icons" key={this.state.score.length}>star</i> :
              <i className="material-icons" key={this.state.score.length}>star_border</i>
            ]),
          state: SCORE
        }));
        this.audio.src = correct ? sounds.correct : sounds.wrong;
        this.audio.play();
      }
    }
  }

  reset() {
    let resetState = {...this.initialState};
    resetState.state = QUESTION;
    this.setState(resetState);
    this.nextQuestion();
  }

  render() {
    return (
      <div id="game">
        <div id="board" className="w3-display-middle" style={{ width: 304, display: (this.state.state == INTRO ? 'none' : 'block') }}>
          <div id="question" className="w3-container w3-red">
            <p>Find an animal with the letter { this.state.letter }</p>
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
