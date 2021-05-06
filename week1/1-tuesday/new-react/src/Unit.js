import React from 'react';
function Unit(props) {
  const newPrice = props.oneUnit.sqFt * props.oneUnit.price;
  const newPricepermonth = newPrice/12;
  return (
    <div>
      <h1>Name: {props.oneUnit.name}</h1>
      <p>Price: $ {newPrice}</p>
      <p>Price per square foot: $ {newPricepermonth}</p>
      <h5>Square Feet: {props.oneUnit.sqFt}</h5>
    </div>
  )
}
export default Unit;