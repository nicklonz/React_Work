import React from 'react';

function UserProfile(props) {
    return (
    <div>
        <h2>{props.userData.username}</h2>
        <p>{props.userData.email}</p>
        <p>{props.userData.about}</p>
        <img src={props.userData.img} />
    </div>
    )


}

export default UserProfile;