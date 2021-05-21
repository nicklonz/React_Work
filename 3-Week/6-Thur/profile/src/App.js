import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Profile from './Profile';
class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: null
    }
  }
  componentDidMount() {
    axios.get('https://randomuser.me/api/')
      .then(data => {
        console.log(data);
        this.setState({
          userData: data.data.results[0]
        })
      })
      .catch(err => {
        this.setState({
          errorText: "WHAT ARE YOU THINKING?!"
        })
      })
  }
  getData = () => {
    axios.get('mytopnewsAPI')
      .then(topdata => {
      })
  }
  render() {
    return (
      <div className="App">
        <h1>User Profile</h1>
        { this.state.userData
          ? <Profile userData={this.state.userData} />
          : <p>Loading...</p>}
        { this.state.errorText && <p>{this.state.errorText}</p>}
      </div>
    );
  }
}
export default App;