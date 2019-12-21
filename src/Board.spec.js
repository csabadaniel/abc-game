import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

describe('Board', () => {
  test('exists', () => {
    const board = shallow(<Board/>);
  });
});
