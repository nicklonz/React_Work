import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import axios from 'axios';

import { getDogList, getRandomDog } from './services/apiHelper';

import BreedList from './components/BreedList';
import RandomDogs from './components/RandomDogs';
import Header from './components/Header';

// class components give us...
// 1.) State -> setState, constructor
// 2.) Lifecycle Methods

class App extends Component {
  constructor() {
    super();

    this.state = {
      dogs: [],
      randomDogPic: null,
      currentView: ""
    }
  }

  fetchDog = async () => {
    const dogs = await getDogList();
    this.setState({ dogs })
  }

  fetchRandomDogPic = async (breed) => {
    const dogPic = await getRandomDog(breed);
    this.setState({
      randomDogPic: dogPic
    })
  }

  pageView() {
    if (this.state.currentView === "list") {
      return (
        <BreedList 
          dogs={this.state.dogs} 
          fetchDog={this.fetchDog}
          fetchRandomDogPic={this.fetchRandomDogPic}
        />
      )
    } else if (this.state.currentView === "random") {
      return (
        <RandomDogs dogPic={this.state.randomDogPic} />
      )
    }
  }

  setView = (updatedView) => {
    this.setState({
      currentView: updatedView
    })
  }

  render() {
    return (
      <div className="App">
        <Header setView={this.setView} />
        { this.pageView() }
      </div>
    );
  }
}

export default App;
