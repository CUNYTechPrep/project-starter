import 'w3-css/w3.css'; 
import React from "react";
import '../../css/Popup.css';
import '../../css/ProfilePage.css';


class PopupBuddies extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
          <button className="button-edits" onClick={this.props.closeBuddiesPopup}> Close Me </button>
          </div>
        </div>
      );
    }
  }
  
  export default PopupBuddies;