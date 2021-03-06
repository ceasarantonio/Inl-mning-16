import App from './App.js';
import Form from './Form.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';



describe("tests", () => {

    test('Form renders shallow smoke test', () => {
    shallow(<Form />);
  })
  
  test('Form renders deep smoke test', () => {
    shallow(<Form />).render();
  })
  
  test(`initiale value, name`, () => {
  let wrapper = mount(<App />);
  let actual = wrapper.state('name');
  let expected = '';
  expect( actual ).toBe( expected );
  })

  test(`initiale value, mail`, () => {
  let wrapper = mount(<App />);
  let actual = wrapper.state('mail');
  let expected = '';
  expect( actual ).toBe( expected );
  })

  test(`input vaule, name`, () => {
    const input = 'Daniel';
    let wrapper = mount(<App />);
    wrapper.find('input.name').simulate('change', {
      target: {
        value: input
      },
      type : 'change'
    });
    let actual = wrapper.state('name');
    expect( actual ).toBe( input )
  })
  
  test(`input value, mail`, () => {
    const input = 'd.ca.karlsson@gmail.com';
    let wrapper = mount(<App />);
    wrapper.find('input.mail').simulate('change', {
      target: {
        value: input
      },
      type : 'change'
    });
    let actual = wrapper.state('mail');
    expect( actual ).toBe( input )
  })
  
   test('Contains input element', () => {
    let wrapper = shallow(<Form />);
    let actual = wrapper.html().indexOf('<input') > -1;
    expect( actual ).toBe( true ); 
  })
  
  
})
