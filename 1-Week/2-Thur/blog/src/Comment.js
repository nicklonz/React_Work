import React from 'react';
// Creating a function in JS:
/*
    1.) Declaration:
        function Comment() {}
    2.) Expression:
        const Comment = () => {}
*/
const Comment = (props) => {
  console.log(props);
  fetch('google.com/casey-rocks')
    .then(resp => {
    })
  return (
    <h4>{props.text}</h4>
  )
}
export default Comment;