import React from 'react';
import 'w3-css/w3.css';
import '../../css/ProfilePage.css';
import auth from '../../services/auth.js';
import snap from  '../../img/sc.jpg';
import insta from '../../img/insta.jpg';
import fb from '../../img/fb.jpg';
import { right } from '@popperjs/core';

const MatchedProfile = (props) => {

console.log(props.profile);
if(props.profile.swiperId === auth.currentUser.id)
    return null;

  var imageURL = props.profile.swiper.image;
  var location = '';
  if (props.profile.swiper.zipCode && props.profile.swiper.city && props.profile.swiper.state) {
    location = `Location: ${props.profile.swiper.city}, ${props.profile.swiper.state} ${props.profile.swiper.zipCode}`;
  } else if (!props.profile.swiper.zipCode && props.profile.swiper.city && props.profile.swiper.state) {
    location = `Location: ${props.profile.swiper.city}, ${props.profile.swiper.state}`;
  } else {
    location = '';
  }

  var inches = props.profile.swiper.height%12;
  var feet = Math.floor(props.profile.swiper.height / 12);

  return (
    <div >
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
      <div >
        <h5 style={{ fontSize: 27}}>
          {props.profile.swiper.firstName} {props.profile.swiper.lastName} - {props.profile.swiper.age}
          <span style={{ color: 'black', float: right }}> {props.profile.swiper.gender} </span>
        </h5>
        <div className='flex-container-profile' style={{ color: 'black' }}>
          <h5 className='location-text'>{location}</h5>
        </div>
        <div className='flex-container-profile' style={{ color: 'black' }}>
        <span><img className="social" src={snap} />{props.profile.swiper.snap}</span> <br></br>
        <span><img className="social" src={insta} /> {props.profile.swiper.insta}</span> <br></br>
        <span><img className="social" src={fb} /> {props.profile.swiper.fb}</span> <br></br>
        </div>

      </div>
    </div>
  );
};

export default MatchedProfile;

