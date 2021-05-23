import 'w3-css/w3.css';
import React from 'react';
import '../../css/Popup.css';
import auth from '../../services/auth.js';

class PopUpSocialMedia extends React.Component {
  state = {
    failed: false,
    snap: '',
    insta: '',
    fb: '',
  };

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    };
  };

  submit = (e) => {
    //calls endpoint and sends in state
    e.preventDefault();
    const { id } = auth.currentUser;
    const setObject = {
      snap: this.state.snap,
      insta: this.state.insta,
      fb: this.state.fb,
    };

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(setObject),
    };
    fetch('/api/users/' + id, requestOptions) //sending it as options
      .then((res) => res.json())
      .then((user) => {
        this.props.closeSocialMediaPopup();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div className='div-heading'>
            <h1>{this.props.text}</h1>
            <div className='div-heading'>
              <form onSubmit={this.submit}>
                <input
                  type='snap'
                  className='form-control'
                  name='snap'
                  placeholder='Snapchat'
                  value={this.state.snap}
                  onChange={this.fieldChanged('snap')}
                />
                <br></br>
                <input
                  type='insta'
                  className='form-control'
                  name='insta'
                  placeholder='Instagram'
                  value={this.state.insta}
                  onChange={this.fieldChanged('insta')}
                />
                <br></br>
                <input
                  type='fb'
                  className='form-control'
                  name='fb'
                  placeholder='Facebook'
                  value={this.state.fb}
                  onChange={this.fieldChanged('fb')}
                />
                <br></br>
                <button
                  className=' button-edits'
                  style={{ height: 50, width: 300, borderRadius: 30 }}
                  type='submit'
                >
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

export default PopUpSocialMedia;
