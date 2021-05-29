import React from 'react';

const RandomDogs = (props) => {
    return (
        <>
            <h2>Cute Doggo</h2>
            { props.dogPic ? <img src={props.dogPic} alt="Cute Dog" /> : null }
        </>
    )
}

export default RandomDogs;