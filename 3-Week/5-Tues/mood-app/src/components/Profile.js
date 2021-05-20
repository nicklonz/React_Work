import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <h2>Hello, {props.username}</h2>
      <h4>{props.userImg}</h4>
      <h5>Your favorite foods from A to Z are: </h5>
      <ul>
          {props.favoriteFoods.map((food) =>
                 <p><li>{food}</li></p>
          )}
      </ul>
      <p>Your mood is: {props.currentMood}</p>
    </div>
  )
}

export default Profile;