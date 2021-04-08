import React from 'react';
import 'w3-css/w3.css'; 
import '../../css/ProfilePage.css';

function ProfileStat(props) {
  return (
      <div>
        <div>
            <h5 style={{fontSize: 27}}>
                Alex, 22 
                <span style={{color: 'white'}}>..................................</span>
                <span style={{color: '#585858'}}>Male</span>
            </h5>
            <h5 style={{color: '#757575', fontSize: 20}}>
                FitLevel: Mid
            </h5>
            <div className="flex-container-profile" style={{color:'#585858'}}>
                <h5>
                    Height: 5'7"
                </h5>
                <h5>
                    Weight: 170lbs
                </h5>
            </div>
            <p style={{maxWidth: 400, marginLeft: 20, marginTop: 10}}>
            I am outgoing and I would like to go to the gym every Saturdays! 
            I prefer a gym buddy from Jackson Heights in NYC :)
            </p>
        </div>
      </div>
    
    
  );
}

export default ProfileStat;