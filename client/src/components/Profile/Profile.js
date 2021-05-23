import React from 'react';
import 'w3-css/w3.css';
import '../../css/ProfilePage.css';

function Profile({
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
  city,
  state,
  zipCode,
}) {
  var imageURL = image + '.jpg';
  var location = '';
  if (zipCode && city && state) {
    location = `Location: ${city}, ${state} ${zipCode}`;
  } else if (!zipCode && city && state) {
    location = `Location: ${city}, ${state}`;
  } else {
    location = '';
  }

  var inches = height%12;
  var feet = Math.floor(height / 12);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          borderRadius: 10,
          height: 400,
          backgroundSize: 600,
        }}
      ></div>
      <div>
        <h5 style={{ fontSize: 27 }}>
          {firstName} {lastName} - {age}
          <span style={{ color: 'black' }}>
            
          </span>
          <span style={{ color: 'black' }}> {gender} </span>
        </h5>
        <h5 style={{ color: 'black', fontSize: 20 }}>FitLevel: {fitLevel}</h5>
        <div className='flex-container-profile' style={{ color: 'black' }}>
          <h5>Height: {feet}' {inches}" </h5>
          <h5>Weight: {weight} lbs</h5>
        </div>
        <div className='flex-container-profile' style={{ color: 'black' }}>
          <h5 className='location-text'>{location}</h5>
        </div>
        {/* <p style={{ maxWidth: 700, marginLeft: 20, marginTop: 10 }}>{bio}</p> */}
        <p style={{ alignSelf: 'center' }}>{bio}</p>
      </div>
    </div>
  );
}

export default Profile;
