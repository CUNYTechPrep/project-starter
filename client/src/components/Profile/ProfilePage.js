import React from 'react';
import 'w3-css/w3.css'; 
import '../../css/ProfilePage.css';
import ProfileStat from './ProfileStat';
import ProfilePic from './ProfilePic';

function ProfilePage(props) {
  return (
      <div >
        <div className="background">
          <div className="title" style={{border: '3px groove lightgray', borderRadius: 20}}>
            My Profile
          </div>
          <div className="flex-container-profile"> 
            <div>
              <div style={{height: 430, width: 400, alignItems: "center",
                borderRadius: 30, margin: 30}}>
                  <ProfilePic />
              </div>       
              <div style={{border: '1px groove lightgray', paddingTop: 10, paddingBottom: 20, paddingLeft: 10, 
                paddingRight: 10, borderRadius: 30}}>
                  <ProfileStat />
              </div>
            </div>
            <div style={{border:'1px solid lightgray', borderRadius: 20, borderStyle: "groove",
                  margin: 30, paddingTop: 50, paddingBottom: 100, textAlign: "center", flexShrink: 1,  flexGrow: 1, justifyContent: "start"}}>
              <div style={{marginBottom: 30, borderRadius: 30}}>
                <button className="button-login" style={{marginLeft: 30, height: 50, width: 300, borderRadius: 30}}>
                  Edit bio
                </button>
              </div>
              <div style={{marginBottom: 30, borderRadius: 30}}>
                <button className="button-login" style={{marginLeft: 30, height: 50, width: 300, borderRadius: 30}}>
                  Edit Profile Picture
                </button>
              </div>
              <div style={{marginBottom: 30, borderRadius: 30}}>
                <button className="button-login" style={{marginLeft: 30, height: 50, width: 300, borderRadius: 30}}>
                  Edit Height & Weight
                </button>
              </div>
              <div style={{marginBottom: 30, borderRadius: 30}}>
                <button className="button-login" style={{marginLeft: 30, height: 50, width: 300, borderRadius: 30}}>
                  See Buddies
                </button>
              </div>
              <br></br>
              <div style={{borderRadius: 30}}>
                <button className="button-login" style={{marginLeft: 30, backgroundColor: '#34865D',
                  height: 50, width: 300, borderRadius: 30}}>
                  Logout
                </button>
              </div>
            </div>
          </div>
          </div>
      </div>
  );
}

export default ProfilePage;