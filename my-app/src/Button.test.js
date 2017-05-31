import App from './App.js';
import Button from './Button.js';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('Button testing', () => {

  test('Button click clear state.name', () => {
    let wrapper = mount(<App />);
    wrapper.find('button.buttonClass').simulate('click'); 
    let actual = wrapper.state('name');
    let expected = '';
    expect( actual ).toBe( expected );
  }) 
  
  test('Button click clear state.mail', () => {
    let wrapper = mount(<App />);
    wrapper.find('button.buttonClass').simulate('click');
    let actual = wrapper.state('mail');
    let expected = '';
    expect( actual ).toBe( expected );
  })

})

