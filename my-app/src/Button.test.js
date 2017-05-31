import App from './App.js';
import Button from './Button.js';
import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import Form from './Form.js';

describe('Button testing', () => {

  test('Button renders shallow smoke test', () => {
    shallow(<Button />);
  })
  
  test('Button renders deep smoke test', () => {
    shallow(<Button />).render();
  })
  
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
  
  test('Contains button element', () => {
    let wrapper = shallow(<Button />);
    let actual = wrapper.html().indexOf('</button>') > -1;
    expect( actual ).toBe( true ); 
  })
  
  test('Has classname', () => {
    let wrapper = shallow(<Button />);
    let actual = wrapper.find('button').hasClass('buttonClass');
    expect( actual ).toBe( true );
  })

})

