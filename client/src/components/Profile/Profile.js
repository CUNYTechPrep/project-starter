import React from 'react';
import 'w3-css/w3.css'; 
import '../../css/ProfilePage.css';

function Profile({ id, firstName, lastName, age, gender, fitLevel, height, weight, bio, image }) {
    var imageURL = image + ".jpg";
    return (
      <div>
        <div>
            <img src= {imageURL} alt={id} style={{height: 300, width: 280}}/>
            <h5 style={{fontSize: 27}}>
                { firstName }, { lastName } - { age } 
                <span style={{color: '#585858'}}>..................................</span>
                <span style={{color: '#585858'}}> {gender} </span>
            </h5>
            <h5 style={{color: '#757575', fontSize: 20}}>
                FitLevel: { fitLevel } 
            </h5>
            <div className="flex-container-profile" style={{color:'#585858'}}>
                <h5>
                    Height: { height } inches
                </h5>
                <h5>
                    Weight: { weight } lbs
                </h5>
            </div>
            <p style={{maxWidth: 400, marginLeft: 20, marginTop: 10}}>
            { bio }
            </p>
        </div>
      </div>
  );
}

export default Profile;