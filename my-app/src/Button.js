import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {
  render(){
    return(
    <div>
      <button 
      className="buttonClass"
      onClick=
      {this.props.handleClick}>Rensa</button>
    </div>
    ) 
  }
}

export default Button;