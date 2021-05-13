import React from  'react'

function FavoriteFoods(props) {
  return (
      <div>
        <p>{props.userData.username}'s favorite foods are...</p>
        {props.favFoods.map((food) =>
            <p>{food}</p>
        )}
      </div>
  )

}

export default FavoriteFoods;