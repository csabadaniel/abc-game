import React from 'react';
import { shallow } from 'enzyme';
import Answer from './Answer';

describe('Answer', () => {
  test('renders id properly', () => {
    const wrapper = shallow(<Answer id="3"/>);
    expect(wrapper.find('div').first().prop('id')).toEqual('answer3');
  });
});
