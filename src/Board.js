import React from 'react';
import Question from './Question';
import Answer from './Answer'

const board = () => (
  <div id="board">
    <Question/>
    <div id="row1">
      <Answer id="1"/>
      <Answer id="2"/>
    </div>
    <div id="row2">
      <Answer id="3"/>
      <Answer id="4"/>
    </div>
  </div>
);
board.displayName = 'Board';

export default board;
