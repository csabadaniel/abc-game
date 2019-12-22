import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import Question from './Question';
import Answer from './Answer';

describe('Board', () => {
  test('renders Question and 4 Answers', () => {
    const wrapper = shallow(<Board/>);
    expect(wrapper.find(Question).length).toEqual(1);
    expect(wrapper.find(Answer).length).toEqual(4);
  });
});
