import React from 'react';
import { Redirect } from 'react-router-dom';

class TripFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    name: '',
    desc: '',
    photoPath: '/assets/images/sally.png'
  }

  descChanged = (event) => {
    this.setState({
      desc: event.target.value
    });
  }
  nameChanged = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  savePost = (event) => {
    fetch("/api/trips/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: {
        name: this.state.name,
        description: this.state.desc,
        coverPhoto: this.state.photoPath
      }
    }),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Error Saving this post.');
      })
      .then(post => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }

    return (
      <div className="col-10 col-md-8 col-lg-7">
        { errorMessage }
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Description here" 
            value={this.state.desc}
            className="form-control mr-3 rounded"
            onChange={this.descChanged}
          />
          <input 
            type="text" 
            placeholder="Name of the trip" 
            value={this.state.name}
            className="form-control mr-3 rounded"
            onChange={this.nameChanged}
          />
          <button className="btn btn-secondary" >Upload</button>
          <button className="btn btn-primary" onClick={this.savePost}>Post</button>
        </div>
      </div>
    );
  }
}

export default TripFormPage;