import React from 'react';
import 'w3-css/w3.css'; 
import '../../css/ProfilePage.css';
import Pic from '../../img/profile.png';

function ProfilePic(props) {
  return (
      <div >
        <img className="profile-pictures" src={Pic} 
        style={{border: '2px groove lightgray', height: 415, width: 350, alignItems: "center",
        borderRadius: 30}}/>
      </div>
    
    
  );
}

export default ProfilePic;