
import 'w3-css/w3.css'; 
import React from "react";
import '../../css/Popup.css';
import '../../css/ProfilePage.css';
import profileEdit from '../../services/profileedit'; 

class PopupBio extends React.Component {
  state = {
    failed: false, 
    bioField: "",
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  submit = (e) => {
    e.preventDefault();
    let userInput = this.state;
    profileEdit.editBio(userInput)
      .then((user) => {
        this.setState({ bioField: userInput });
      })
  }

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div className="div-heading">
            <h1>{this.props.text}</h1>
            <div className="div-heading">
              <form onSubmit={this.submit}>
                <input 
                    type="bio"
                    className="form-control"
                    name="bio"
                    placeholder="Tell us about yourself in 255 words or less" 
                    value={this.state.bioField} 
                    onChange={this.fieldChanged('bio')} 
                  />
                    <br></br>
                  <button className= " button-edits" style={{marginLeft: 30, height: 50, width: 300, borderRadius: 30}}
                    onClick={this.props.closePopup} type="submit"> 
                    Save 
                  </button>
                </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
  
  export default PopupBio;