import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      clock: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      clock: new Date()
    })
  }

 render() {
  return (
    <div className="App">
      <h1>IT'S A CLOCK</h1>
      <h1>It is now {this.state.clock.toLocaleTimeString() }</h1>
    </div>
  );
  }
}
export default App;
