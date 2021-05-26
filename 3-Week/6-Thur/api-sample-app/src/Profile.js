import React from 'react';

const Profile = props => {
    return (
        <div>
            <p>{ props.userData.email }</p>
        </div>
    )
}

export default Profile;