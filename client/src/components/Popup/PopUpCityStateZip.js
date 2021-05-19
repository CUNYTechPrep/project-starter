import 'w3-css/w3.css';
import React from 'react';
import '../../css/Popup.css';
import auth from '../../services/auth.js';

class PopupCityStateZip extends React.Component {
  state = {
    failed: false,
    cityField: '',
    stateField: '',
    zipCodeField: '',
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
      city: this.state.cityField,
      state: this.state.stateField,
      zipCode: this.state.zipField,
    };

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(setObject),
    };
    fetch('/api/users/' + id, requestOptions) //sending it as options
      .then((res) => res.json())
      .then((user) => {
        this.props.closeCityStateZipPopup();
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
                  type='cityField'
                  className='form-control'
                  name='cityField'
                  placeholder='Los Angeles, Brooklyn, etc.'
                  value={this.state.cityField}
                  onChange={this.fieldChanged('cityField')}
                />
                <br></br>
                <input
                  type='stateField'
                  className='form-control'
                  name='stateField'
                  placeholder='CA, NY, etc.'
                  value={this.state.stateField}
                  onChange={this.fieldChanged('stateField')}
                />
                <br></br>
                <input
                  type='zipCodeField'
                  className='form-control'
                  name='zipCodeField'
                  placeholder='91791, 11213, etc.'
                  value={this.state.zipCodeField}
                  onChange={this.fieldChanged('zipCodeField')}
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

export default PopupCityStateZip;
