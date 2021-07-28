import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('tests in RealExampleRef', () => {
  const wrapper = shallow( < RealExampleRef /> );

  test('should display the component', () => {
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);
  })

  test('should display <MultipleCustomHooks />', () => {
    wrapper.find('button').simulate('click');
    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
  })
  

})