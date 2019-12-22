import React from 'react';
import { shallow } from 'enzyme';
import Question from './Question';

describe('Question', () => {
  test('exists', () => {
    const wrapper = shallow(<Question/>);
  });
});
