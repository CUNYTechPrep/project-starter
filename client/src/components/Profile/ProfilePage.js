import React from 'react';
import 'w3-css/w3.css';
import '../../css/ProfilePage.css';

import CurrentProfile from '../../components/Profile/CurrProfile';
import AuthButton from '../AuthButton';
import edit from '../../services/profileedit';
import PopupBio from '../Popup/PopupBio';
import PopupFit from '../Popup/PopUpFit';
import PopupHW from '../Popup/PopUpHW';
import PopupBuddies from '../Popup/PopUpBuddies';
import auth from '../../services/auth.js';
import PopupCityStateZip from '../Popup/PopUpCityStateZip';

class ProfilePage extends React.Component {
  state = {
    showBioPopup: false,
    showFitPopup: false,
    showHWPopup: false,
    showBuddiesPopup: false,
    showCityStateZipPopup: false,
    profile: null,
  };

  componentDidMount() {
    const { id } = auth.currentUser;
    fetch('/api/users/' + id)
      .then((res) => res.json())
      .then((myProfile) => {
        this.setState({
          loading: false,
          profile: <CurrentProfile {...myProfile} />,
        });
      });
  }
  //For EDITING BIO
  toggleBioPopup() {
    this.setState({
      showBioPopup: !this.state.showBioPopup,
    });
  }

  //For EDITING FITLEVEL
  toggleFitPopup() {
    this.setState({
      showFitPopup: !this.state.showFitPopup,
    });
  }

  //For EDITING HEIGHT & WEIGHT
  toggleHWPopup() {
    this.setState({
      showHWPopup: !this.state.showHWPopup,
    });
  }

  //To SEE BUDDIES
  toggleBuddiesPopup() {
    this.setState({
      showBuddiesPopup: !this.state.showBuddiesPopup,
    });
  }

  toggleCityStateZipPopup() {
    this.setState({
      showCityStateZipPopup: !this.state.showCityStateZipPopup,
    });
  }

  //PUT function for Edit Bio
  editBio = (e) => {
    e.preventDefault();
    let bio = this.state;
    edit
      .bio(bio)
      .then((user) => {
        this.setState({ bio: this.state.bio });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
  };

  render() {
    return (
      <div>
        <div className='background'>
          <div
            className='title'
            style={{ border: '3px groove lightgray', borderRadius: 20 }}
          >
            My Profile
          </div>
          <div className='flex-container-profile'>
            <div>{this.state.profile}</div>

            {/* EDITING SECTION */}
            <div
              style={{
                border: '1px solid lightgray',
                borderRadius: 20,
                borderStyle: 'groove',
                margin: 30,
                paddingTop: 50,
                paddingBottom: 100,
                textAlign: 'center',
                flexShrink: 1,
                flexGrow: 1,
                justifyContent: 'start',
              }}
            >
              <div style={{ marginBottom: 30, borderRadius: 30 }}>
                <button
                  className='button-edits'
                  style={{
                    marginLeft: 30,
                    height: 50,
                    width: 300,
                    borderRadius: 30,
                  }}
                  onClick={this.toggleBioPopup.bind(this)}
                >
                  Edit Bio
                </button>
              </div>
              <div style={{ marginBottom: 30, borderRadius: 30 }}>
                <button
                  className='button-edits'
                  style={{
                    marginLeft: 30,
                    height: 50,
                    width: 300,
                    borderRadius: 30,
                  }}
                  onClick={this.toggleFitPopup.bind(this)}
                >
                  Edit Fit Level
                </button>
              </div>
              <div style={{ marginBottom: 30, borderRadius: 30 }}>
                <button
                  className='button-edits'
                  style={{
                    marginLeft: 30,
                    height: 50,
                    width: 300,
                    borderRadius: 30,
                  }}
                  onClick={this.toggleHWPopup.bind(this)}
                >
                  Edit Height & Weight
                </button>
              </div>
              <div style={{ marginBottom: 30, borderRadius: 30 }}>
                <button
                  className='button-edits'
                  style={{
                    marginLeft: 30,
                    height: 50,
                    width: 300,
                    borderRadius: 30,
                  }}
                  onClick={this.toggleCityStateZipPopup.bind(this)}
                >
                  Edit Location
                </button>
              </div>
              <div style={{ marginBottom: 30, borderRadius: 30 }}>
                <button
                  className='button-edits'
                  style={{
                    marginLeft: 30,
                    height: 50,
                    width: 300,
                    borderRadius: 30,
                  }}
                  onClick={this.toggleBuddiesPopup.bind(this)}
                >
                  See Buddies
                </button>
              </div>
              <br></br>
              <div style={{ borderRadius: 30 }}>
                <AuthButton
                  className='button-edits'
                  style={{
                    marginLeft: 30,
                    backgroundColor: '#71737A',
                    height: 50,
                    width: 300,
                    borderRadius: 30,
                    marginTop: 30,
                  }}
                >
                  Logout
                </AuthButton>
              </div>
              {this.state.showBioPopup ? (
                <PopupBio
                  text='Edit Bio'
                  closePopup={this.toggleBioPopup.bind(this)}
                />
              ) : null}
              {this.state.showFitPopup ? (
                <PopupFit
                  text='Edit FitLevel'
                  closeFitPopup={this.toggleFitPopup.bind(this)}
                />
              ) : null}
              {this.state.showHWPopup ? (
                <PopupHW
                  text='Edit Height & Weight'
                  closeHWPopup={this.toggleHWPopup.bind(this)}
                />
              ) : null}
              {this.state.showBuddiesPopup ? (
                <PopupBuddies
                  text='Your Buddies List!'
                  closeBuddiesPopup={this.toggleBuddiesPopup.bind(this)}
                />
              ) : null}
              {this.state.showCityStateZipPopup ? (
                <PopupCityStateZip
                  text='Your Location!'
                  closeCityStateZipPopup={this.toggleCityStateZipPopup.bind(
                    this
                  )}
                />
              ) : null}
            </div>
          </div>
          <div
            style={{
              marginTop: 40,
              float: 'right',
              marginBottom: 10,
              color: 'lightgray',
            }}
          >
            @Fitbud
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
