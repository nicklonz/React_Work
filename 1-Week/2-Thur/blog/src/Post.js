import React from 'react';
import Comment from './Comment';
// const Post = function(props) {}
const Post = (props) => {
  const allComments = props.post.comments.map((comment) => {
    return <Comment text={comment} />
  })
  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>By: {props.post.author}</p>
      <p>{props.post.body}</p>
      { allComments}
    </div>
  )
}
export default Post;