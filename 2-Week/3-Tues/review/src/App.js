import logo from './logo.svg';
import './App.css';

import UserProfile from './UserProfile';
import FavoriteFoods from './FavoriteFoods';

function App() {
    const profile = {
      username: "NPL",
      email: "test@test.com",
      about: "Whatever Forever",
      img: "https://image.shutterstock.com/image-photo/beef-hamburger-sandwich-aubergine-paste-600w-1538897342.jpg"
    }

      const foods = ["Pizza", "Cheeseburger", "Sushi", "Supersandwich"
      ]

  return (
    <div className="App">
      <h1>Favorite Foods</h1>
      <FavoriteFoods userData={profile} favFoods={foods}/>
      <UserProfile userData={profile} />
    </div>
  );
}

export default App;
