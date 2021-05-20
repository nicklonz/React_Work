import './App.css';

import React, { Component } from 'react';

import Profile from './components/Profile.js';
import MoodTracker from './components/MoodTracker.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userImg: "Blank URL",
      username: "Nick",
      content: "Here we go...",
      favoriteFoods: ["Zoo","Apple Pie","Everything Bagel", "Sushi", "Hot Wings"],
      currentMood: 9
    }
  }

  render() {

  return (
    <div className="App">
      <h1>Mood Tracker</h1>
      <Profile
        userImg={this.state.userImg}
        username={this.state.username}
        favoriteFoods={this.state.favoriteFoods}
        currentMood={this.state.currentMood}
      />
        <MoodTracker currentMood={this.state.currentMood} />
    </div>
    );
  }
}

export default App;
