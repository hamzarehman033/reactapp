import logo from '../logo.svg';
import '../App.css';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      spinning: true,
      speed:20
    }
  }
  componentDidMount(){
    
  }

  toggleSpin = ()=>{
    this.setState({
      spinning: !this.state.spinning
    })
  }
  render(){
    const spinningEffect={
      animation : 'logo-spin infinite 20s linear'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" style={ this.state.spinning?  spinningEffect: {} } alt="logo" />
          <button onClick={this.toggleSpin}className="btn btn-white"><FontAwesomeIcon icon={ this.state.spinning? faStop : faPlay} /></button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home Page
          </a>
        </header>
      </div>
    );
  }
  
}

export default HomePage;
