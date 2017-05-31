import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';
import Form from './Form.js';

class App extends Component {
  constructor (props){
  super(props);
    this.state = {
      name: '',
      mail: ''
    };
    
    this.updateName = this.updateName.bind(this);
    this.updateMail = this.updateMail.bind(this);
    this.erase = this.erase.bind(this);
    
    
  }
  
  updateName(event){
    this.setState({
      name: event.target.value
    });
  }
  
  updateMail(event){
    this.setState({
      mail: event.target.value
    });
  }
  
  erase(event){
    this.setState({
      mail: '',
      name: ''
    });
  }
  
    render() {
    return (
      <div>
        <Form 
        name={this.state.name}
        mail={this.state.mail}
        handelNameChange={this.updateName}
        handelMailChange={this.updateMail}
        />
        <Button 
        handleClick={this.erase}
        />
      </div>
    );
  }
}



export default App;
