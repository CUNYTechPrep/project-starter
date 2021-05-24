import React, { useState } from 'react';
import 'w3-css/w3.css';
import '../../css/ProfilePage.css';
import axios from 'axios';

function CurrentProfile({
  id,
  firstName,
  lastName,
  age,
  gender,
  fitLevel,
  height,
  weight,
  bio,
  image,
  zipCode,
  city,
  state,
}) {
  var imageURL = image;
  var location = '';
  if (zipCode && city && state) {
    location = `Location: ${city}, ${state} ${zipCode}`;
  } else if (!zipCode && city && state) {
    location = `Location: ${city}, ${state}`;
  } else {
    location = '';
  }

//converting height to feet and inches here maybe.
// let feet = 0;
// let inches = 0;
    var inches = height%12;
    var feet = Math.floor(height / 12);
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [imageToSubmit, setImageToSubmit] = useState('');

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    setSelectedFile(file.name);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!previewSource && !selectedFile) return;
    uploadImage(selectedFile);
  };

  const uploadImage = (selectedImage) => {
    const formData = new FormData();
    const file = previewSource;
    formData.append('file', file);
    formData.append('upload_preset', 'mmppva7q');
    axios
      .post('https://api.cloudinary.com/v1_1/dadhurnls/image/upload', formData)
      .then((response) => {
        console.log(response.data.secure_url);
        setImageToSubmit(response.data.secure_url);
        fetch('/api/users/' + id, {
          method: 'PUT',
          body: JSON.stringify({ image: response.data.secure_url }),
          headers: { 'Content-type': 'application/json' },
        }).catch((err) => {
          console.log('Error in PUT request: ', err);
        });
      })
      .catch((error) => {
        console.log('Error uploading image to Cloudinary', error);
      });
  };

  return (
    <div>
      <div>
        <div
          style={{
            border: '1px groove lightgray',
            paddingTop: 10,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 30,
            backgroundColor: '#E6E9EE5E',
            
          }}
        >
          <div>
            <div>
              <div
                style={{

                  alignItems: 'center',
                  borderRadius: 30,
                  margin: 30,
                 
                }}
              >
                <img
                  src={previewSource ? previewSource : imageURL}
                  alt={id}
                  style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    borderRadius: 10,
                    maxHeight: 400
                  }}
                />
                {/* upload_image form, submit button, and preview_of_image */}

                <form onSubmit={handleSubmitFile}>
                  <input
                    type='file'
                    name='image'
                    onChange={handleFileInputChange}
                    className='button-file'
                  ></input>
                  <button
                    className='button-file'
                    type='submit'
                    style={{ width: '60px', height: '30px' }}
                  >
                    Submit
                  </button>
                </form>
              </div>

              <div
                style={{
                  border: '1px groove lightgray',
                  paddingTop: 10,
                  paddingBottom: 20,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderRadius: 30,
                  backgroundColor: '#5796F35E',
                }}
              >
                <div style={{backgroundColor: '#ffffff', borderRadius: 20}}>
                  <div >
                    <h5 style={{ fontSize: 27 }}>
                      <span style={{ color: '#585858', float: 'left', marginLeft: 20 }}>
                        {' '}
                        {firstName} {lastName} - {age}{' '}
                      </span>
                      <span style={{ color: '#585858', float: 'right', marginRight: 20  }}>
                        {' '}
                        {gender}{' '}
                      </span>
                    </h5>
                    <br></br><br></br>
                    <div style={{backgroundColor: 'white'}}>
                      <h5 style={{ color: '#757575', fontSize: 20 }}>
                        FitLevel: {fitLevel}
                      </h5>
                      <div
                        className='flex-container-profile'
                        style={{ color: '#585858' }}
                      >
                        <h5>Height: {feet}' {inches}" </h5>
                        <h5>Weight: {weight} lbs</h5>
                      </div>
                      <div
                        className='flex-container-profile'
                        style={{ color: '#585858' }}
                      >
                        <h5 className='location-text'>{location}</h5>
                      </div>
                      <div style={{ maxWidth: 700, marginLeft: 40, marginTop: 10, marginRight: 40,
                                backgroundColor: 'white', borderRadius: 40}}>
                        {bio}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CurrentProfile;
