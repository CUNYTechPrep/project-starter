import 'w3-css/w3.css'; 
import React from "react";
import '../../css/Popup.css';
import profileEdit from '../../services/profileedit'; 


class PopupFit extends React.Component {
  state = {
    failed: false,
    fitLevelField: "",
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
    profileEdit.bio(userInput)
      .then((user) => {
        this.setState({ fitLevelField: userInput });
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
                    placeholder="Starter, Mid, Pro" 
                    value={this.state.fitLevelField} 
                    onChange={this.fieldChanged('fitLevel')} 
                  />
                    <br></br>
                  <button className= " button-edits" style={{height: 50, width: 300, borderRadius: 30}}
                    onClick={this.props.closeFitPopup} type="submit"> 
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
  
  export default PopupFit;