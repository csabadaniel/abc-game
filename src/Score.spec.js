import React from 'react';
import { shallow } from 'enzyme';
import Score from './Score';

describe('Score', () => {
  test('exists', () => {
    const score = shallow(<Score/>);
  })
});
