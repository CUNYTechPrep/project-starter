import React from 'react';
import { Redirect } from 'react-router-dom';
import ImageCard from '../components/ImageCard.js';

const cloudinary = window.cloudinary;

class TripFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    name: '',
    desc: '',
    photoPath: "",
    pics: [],
    picUrls:[],
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
        coverPhoto: this.state.picUrls[0],
        pics: this.state.picUrls,
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

  picsAdded = (event) => {
    this.state.pics.forEach(function(i){
      console.log(i)
    })
  }

  // componentDidMount() {
  //   const id = 1;
  //   fetch("/api/trips/" + id)
  //     .then(res => res.json())
  //     .then(posts => {
  //       this.setState({
  //         loading: false,
  //         posts: posts.map((p,ii) => <ImageCard {...p} key={ii} />),
  //       });
  //     })
  //     .catch(err => console.log("API ERROR: ", err));
  // }

  render() {
    let myWidget = cloudinary.createUploadWidget({
      cloudName: 'ctptrippin', 
      uploadPreset: 'hdhhww5k', 
      tags:['1'],
      cropping: true,
      showSkipCropButton: false,
      croppingAspectRatio: 1.0,
      }, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
          this.setState({pics: this.state.pics.concat(<ImageCard src={result.info.secure_url} />), 
            picUrls: this.state.picUrls.concat(result.info.secure_url),
          })
        }
      }
    )
    
    if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      )};

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
          <button className="btn cloudinary-button" onClick={() => myWidget.open()}>Upload</button>
          <button className="btn btn-primary" onClick={this.savePost}>Post</button>
          <div className="form-list">
            {this.state.pics}
          </div>
        </div>
      </div>
    );
  }
}

export default TripFormPage;