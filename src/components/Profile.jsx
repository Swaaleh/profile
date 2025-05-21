import React from 'react';

function Profile (){
    return (
        <div className="profile">
            <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="profile-image"
            />
            <h2 className="profile-name">Your Name</h2>
            <p className="profile-bio">
                This is a short bio about yourself. You can update this information.
            </p>
        </div>
    );
};

export default Profile;