import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activate: true,
      speed: 'App-logo'
    }
    
  }

  changing = () => {
    this.setState({activate: !this.state.activate})
    if (this.state.activate === true) {
      this.setState({speed: 'App-logo'})
    } else {
      this.setState({speed: 'App-logo-spedup'})
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.speed} alt="logo" />
          <button onClick={this.changing}>Click to modify state</button>

        </header>
      </div>
    );
  }
}

export default App;
