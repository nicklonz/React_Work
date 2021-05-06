import React from 'react';
function Unit(props) {
  const newPrice = props.oneUnit.sqFt * props.oneUnit.price;
  return (
    <div>
      <h1>Name: {props.oneUnit.name}</h1>
      <p>Price: {newPrice}</p>
      <h5>Square Feet: {props.oneUnit.sqFt}</h5>
    </div>
  )
}
export default Unit;