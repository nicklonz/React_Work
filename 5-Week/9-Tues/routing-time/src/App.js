import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
/*
  Link -> sends the user to a url
  Route -> listens for a url, and renders a component
*/

import About from './components/About';
import AllPosts from './components/AllPosts';
import Post from './components/Post';

// Blog App!
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          uid: "A4adgexfsd",
          title: "My First Post",
          author: "NPL",
          content: "Whatever forever..."
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>My Blog!</h1>
        <nav>
          <Link to="/">Home</Link>{'  '}
          <Link to="/about">About</Link>{' '}
          <Link to="/posts">All Posts</Link>
        </nav>
        <main>
          <Route path="/about" render={() => <About /> } />
          <Route exact path="/posts" render={() => 
            <AllPosts posts={this.state.posts}/> 
          } />
          <Route path="/posts/:index" render={(props) =>
              <Post posts={this.state.posts} id={props.match.params.index} />
          } />
        </main>
      </div>
    );
  }
}

export default App;
