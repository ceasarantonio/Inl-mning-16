import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends Component{
  render(){
    return(
     <div>
      <input 
        placeholder="name"
        type="text"
        className="name"
        value={this.props.name}
        onChange=
        {this.props.handelNameChange}/>
      
    
      <input 
       placeholder="mail"
       type="text"
       className="mail"
       value={this.props.mail}
       onChange=
        {this.props.handelMailChange}/>
      
      </div> 
    )
  }
}

export default Form;