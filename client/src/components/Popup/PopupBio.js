
import 'w3-css/w3.css'; 
import React from "react";
import '../../css/Popup.css';
import '../../css/ProfilePage.css';
import auth from '../../services/auth.js';


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


  submit = (e) => { //calls endpoint and sends in state
    e.preventDefault();
    const { id } = auth.currentUser;
    const setObject = { bio: this.state.bioField };

    const requestOptions = { 
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(setObject)
    }
    fetch("/api/users/"+id, requestOptions ) //sending it as options
      .then(res => res.json())
      .then(user => {
        this.props.closePopup();
      })
      .catch(err => {
        console.log( err );
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
                    type="bioField"
                    className="form-control"
                    name="bioField"
                    placeholder="Tell us about yourself in 255 words or less" 
                    value={this.state.bioField} 
                    onChange={this.fieldChanged('bioField')} 
                  />
                    <br></br>
                  <button className= " button-edits" style={{height: 50, width: 300, borderRadius: 30}}
                   type="submit"> 
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