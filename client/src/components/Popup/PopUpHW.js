import 'w3-css/w3.css'; 
import React from "react";
import '../../css/Popup.css';

class PopupHW extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
          <button onClick={this.props.closeHWPopup}> Close Me </button>
          </div>
        </div>
      );
    }
  }
  
  export default PopupHW;