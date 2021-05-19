import React from 'react';

const MoodTracker = (props) => {
  return (
    <div>
    { props.currentMood > 5 
      ? <p>Wow, good mood eh?</p>
      : <p>Sorry, bud. feel better!</p>
    }
    </div>
  )
}

export default MoodTracker;