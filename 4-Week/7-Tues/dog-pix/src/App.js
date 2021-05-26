import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import axios from 'axios';

import BreedList from './components/BreedList';

  class App extends Component {
    constructor() {
      super();

      this.state = {
          dogs: []
      }
    }

    fetchDog = async () => {
      const response = await axios.get('https://dog.ceo/api/breeds/list/all')
      console.log(response.data.message);
      const dogs = Object.keys(response.data.message);
      console.log(dogs);
      this.setState({ dogs })
    }

    fetchRandomDogPic = async (breed) => {
      const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
      this.setState({randomDogPic:response.data.message})
    }
    
    render() {
      return (
        <div className="App">
          <h1>DOG PICS</h1>
          { this.state.randomDogPic && <img src={this.state.randomDogPic} alt="Cute Dog"/> }
          <BreedList
            dogs={this.state.dogs}
            fetchDog={this.fetchDog}
            fetchRandomDogPic={this.fetchRandomDogPic}
          />
        </div>
    );
  }
}
export default App;
