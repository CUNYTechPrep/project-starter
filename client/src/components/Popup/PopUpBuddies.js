import 'w3-css/w3.css'; 
import React from "react";
import '../../css/Popup.css';
import '../../css/ProfilePage.css';
import Profile from  '../Profile/Profile';


class PopupBuddies extends React.Component {
  state = {
    failed: false,
    profiles: [],
  }
  
  componentDidMount() {
    fetch("/api/matchedusers")
    .then(res => res.json())
    .then(profiles => {
      this.setState({
        loading: false,
        profiles: profiles.map((p, ii) => <Profile {...p} key={ii} />),
      });
    })
    .catch(err => console.log("API ERROR: ", err));
  }
    render() {
      return (
        <div className='popup'>
          <div className='popup-buddies'>
            <h1>{this.props.text}</h1>
          <button className= " button-edits" style={{height: 50, width: 300, borderRadius: 30}}
            onClick={this.props.closeBuddiesPopup} type="submit"> 
            Save 
          </button>
          </div>
        </div>
      );
    }
  }
  
  export default PopupBuddies;