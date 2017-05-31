import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App-test suite', () => {
  

  test('App renders shallow smoke test', () => {
    shallow(<App />);
  })
  
  test('App renders deep smoke test', () => {
    shallow(<App />).render();
  })
})