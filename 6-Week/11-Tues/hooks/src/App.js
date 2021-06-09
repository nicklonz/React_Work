import logo from './logo.svg';
import './App.css';

import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(10);
  const [users, setUsers] = useState([]);
  const imageRef = useRef(null);
  const [inputText, setInputText] = useState("");

  const firstImg = "https://images.freeimages.com/images/large-previews/5c6/sunset-jungle-1383333.jpg"
  const secondImg = "https://images.freeimages.com/images/large-previews/4cb/paw-1394447.jpg"


  async function getUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/")
    const users = await resp.json();
    setUsers(users);
  }

  useEffect(() => { getUsers();},[])

  return (
      <div className="App">
        <h1>Super Site By NPL</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Add One</button>
        <button onClick={() => setCount(count - 1)}>Sub One</button>
        {users.map((user, index) => <p key={index}>{user.username}</p>)}
        <img
          onMouseOut = {() => {
            imageRef.current.src = firstImg;
          }}
          onMouseOver = {() => {
            imageRef.current.src = secondImg;
          }}
          src={firstImg}
          alt="pic or cat or nature"
          ref={imageRef}
        />
      </div>
    );
  }

export default App;
