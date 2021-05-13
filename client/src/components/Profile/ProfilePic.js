import React from 'react';
import 'w3-css/w3.css';
import '../../css/ProfilePage.css';
import Pic from '../../img/unknown.jpg';

function ProfilePic(props) {
  return (
    <div>
      <img
        className="profile-pictures"
        alt="profile-pic"
        src={Pic}
        style={{
          border: '2px groove lightgray',
          height: 400,
          width: 350,
          alignItems: 'center',
          borderRadius: 30,
        }}
      />
    </div>
  );
}

export default ProfilePic;
