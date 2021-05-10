import React from 'react';
import 'w3-css/w3.css'; 
import '../../css/ProfilePage.css';
// import ProfileStat from './ProfileStat';
import ProfilePic from './ProfilePic';
import AuthButton from '../AuthButton';
import edit from '../../services/profileedit';
import PopupBio from '../Popup/PopupBio';
import PopupFit from '../Popup/PopUpFit';
import PopupHW from '../Popup/PopUpHW';
import PopupBuddies from '../Popup/PopUpBuddies';

class ProfilePage extends React.Component {
  state = {
    showBioPopup: false,
    showFitPopup: false,
    showHWPopup: false,
    showBuddiesPopup: false,
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  //For EDITING BIO
  toggleBioPopup() {
    this.setState({
      showBioPopup: !this.state.showBioPopup
    });
  }

  //For EDITING FITLEVEL 
  toggleFitPopup() {
    this.setState({
      showFitPopup: !this.state.showFitPopup
    });
  }

  //For EDITING HEIGHT & WEIGHT 
  toggleHWPopup() {
    this.setState({
      showHWPopup: !this.state.showHWPopup
    });
  }

   //To SEE BUDDIES
   toggleBuddiesPopup() {
    this.setState({
      showBuddiesPopup: !this.state.showBuddiesPopup
    });
  }

  //PUT function for Edit Bio
  editBio = (e) => {
    e.preventDefault();
    let bio = this.state;
    edit.bio(bio)
      .then((user) => {
        this.setState({ bio: this.state.bio });
      })
      .catch((err) => {
        this.setState({ failed: true})
      })
  }

  //PUT function for Edit Profile Picture
  //PUT function for Height & Weight
  render() {



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
                          Sample Bio Data
                        </p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{border:'1px solid lightgray', borderRadius: 20, borderStyle: "groove",
                    margin: 30, paddingTop: 50, paddingBottom: 100, textAlign: "center", flexShrink: 1,  flexGrow: 1, justifyContent: "start"}}>
                <div style={{marginBottom: 30, borderRadius: 30}}>
                  <button className="button-edits" style={{marginLeft: 30, height: 50, width: 300, borderRadius: 30}}
                    onClick={this.toggleBioPopup.bind(this)}>
                    Edit Bio
                  </button>
                </div>
                <div style={{marginBottom: 30, borderRadius: 30}}>
                  <button className="button-edits" style={{marginLeft: 30, height: 50, width: 300, borderRadius: 30}}
                    onClick={this.toggleFitPopup.bind(this)}>
                    Edit Fit Level
                  </button>
                </div>
                <div style={{marginBottom: 30, borderRadius: 30}}>
                  <button className="button-edits" style={{marginLeft: 30, height: 50, width: 300, borderRadius: 30}}
                    onClick={this.toggleHWPopup.bind(this)}>
                    Edit Height & Weight
                  </button>
                </div>
                <div style={{marginBottom: 30, borderRadius: 30}}>
                  <button className="button-edits" style={{marginLeft: 30, height: 50, width: 300, borderRadius: 30}}
                    onClick={this.toggleBuddiesPopup.bind(this)}>
                    See Buddies
                  </button>
                </div>
                <br></br>
                <div style={{borderRadius: 30}}>
                  <AuthButton className="button-edits" style={{marginLeft: 30, backgroundColor: '#34865D',
                    height: 50, width: 300, borderRadius: 30, marginTop: 30}}>
                    Logout
                  </AuthButton>
                </div>
                {this.state.showBioPopup ? 
                  <PopupBio
                    text='Edit Bio'
                    closePopup={this.toggleBioPopup.bind(this)}/>
                    : null
                }
                {this.state.showFitPopup ? 
                  <PopupFit
                    text='Edit FitLevel'
                    closeFitPopup={this.toggleFitPopup.bind(this)}/>
                    : null
                }
                {this.state.showHWPopup ? 
                  <PopupHW
                    text='Edit Height & Weight'
                    closeHWPopup={this.toggleHWPopup.bind(this)}/>
                    : null
                }
                {this.state.showBuddiesPopup ? 
                  <PopupBuddies
                    text='Your Buddies List!'
                    closeBuddiesPopup={this.toggleBuddiesPopup.bind(this)}/>
                    : null
                }
              </div>
            </div>
            <div style={{marginTop: 40, float: "right", marginBottom: 10, color: "lightgray"}}>
                @Fitbud
            </div>
          </div>
        </div>
    );
  }
}

export default ProfilePage;