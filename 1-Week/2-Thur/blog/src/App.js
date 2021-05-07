import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Comment from './Comment';
import Post from './Post';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: "My First Post",
        author: "NPL",
        body: "Lorem ipsum dolor sit amet.",
        comments: ["First Comment", "Second Comment", "etc etc etc", "Final Comment", "Bing Bang Boom"]
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Post post={this.state.post} />
      </div>
    );
  }
}
export default App;