import 'w3-css/w3.css'; 
import React from "react";
import '../../css/Popup.css';
import profileEdit from '../../services/profileedit'; 


class PopupFit extends React.Component {

  
  // state = {
  //   failed: false, 
  //   fitField: "",
  // }


  // fieldChanged = (name) => {
  //   return (event) => {
  //     let { value } = event.target;
  //     this.setState({ [name]: value });
  //   }
  // }

  // submit = (e) => {
  //   e.preventDefault();
  //   let userInput = this.state;
  //   profileEdit.bio(userInput)
  //     .then((user) => {
  //       this.setState({ fitField: userInput });
  //     })
  // }


  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closeFitPopup}> Close Me </button>
        </div>
      </div>
    );
  }
}
  
  export default PopupFit;