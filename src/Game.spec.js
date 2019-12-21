import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game';
import Board from './Board';
import Score from './Score';

describe('Game', () => {
  test('renders Board and Score', () => {
    const wrapper = shallow(<Game/>);
    expect(wrapper.find(Board).length).toEqual(1);
    expect(wrapper.find(Score).length).toEqual(1);
  });
});
