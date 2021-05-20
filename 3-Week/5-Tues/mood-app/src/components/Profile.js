import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <h4>Hello, {props.username}</h4>
      <h5>Your favorite foods from A to Z are: </h5>
      <ul>
          {props.favoriteFoods.map((food) =>
                 <p>{food}</p>
          )}
      </ul>
      <p>Your mood is: {props.currentMood}</p>
    </div>
  )
}

export default Profile;