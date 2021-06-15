import logo from '../logo.svg';
import '../App.css';
import { Component } from 'react';

class Contact extends Component {
 

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            Contact Page
          </h3>
        </header>
      </div>
    );
  }
  
}

export default Contact;
