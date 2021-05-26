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
  var imageURL = image;
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
          <span style={{ color: 'white', float: 'left', marginLeft: 40 }}>
            {' '}
            {firstName} {lastName} - {age}{' '}
          </span>
          <span style={{ color: 'white', float: 'right', marginRight: 40  }}>
            {' '}
            {gender}{' '}
          </span>
        </h5>
        <br></br><br></br>
        <h5 style={{ color: 'lightGray', fontSize: 20 }}>FitLevel: {fitLevel}</h5>
        <div className='flex-container-profile' style={{ color: 'lightGray' }}>
          <h5 className='location-text'>Height: {feet}' {inches}" </h5>
          <h5 className='location-text'>Weight: {weight} lbs</h5>
        </div>
        <div className='flex-container-profile' style={{ color: 'white' }}>
          <h5 className='location-text'>{location}</h5>
        </div>
        <h5 className='location-text' style={{ maxWidth: 700, marginLeft: 40, marginTop: 10, 
            marginRight: 40, color: "lightGray", fontSize: 22 }}>
          {bio}
        </h5>
      </div>
    </div>
  );
}

export default Profile;
