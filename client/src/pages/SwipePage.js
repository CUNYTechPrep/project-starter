import React from 'react';
import 'w3-css/w3.css';
import '../App.css';
import '../styles.css';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper'
import'swiper/swiper-bundle.css';

// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFXY2dx8oaeL9wTegcl2HMui-IIYYchJY&callback=initMap">
// send data to back end point 
// save their location upon the creation of their account since not all users are always online
// Ask users for their zipcode and then compare their zipcodes for area check
// compare against the user's last known location

SwiperCore.use([Navigation]);

function SwipePage() {
  const slides=[];

  //Fetch data from the api that has all the profiles
  // sends back an array and we do this forloop and we push the real data into
  //  these slides...
  // then we will see real profiles back and forth as we swipe.
  // anytime you want to get information with express we have to use FETCH, POST,GET...etc
  // We will use ANOTHER fetch call to know if the swipe was left or right.
  for (let i=0; i<5; i+=1){
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="ul">
        <div class='rectangle'>
          <div class='profile_image'></div>
          <div class='detailcontainer'>
            <span style={{fontSize: 25}}>
              John Cena, {i+20}
            </span>

            <div class='bio_box'>
              <div style={{float: "left", marginLeft: 30, marginTop: 10}}>
                <b>Height:</b> 6'1"
              </div>
              <div style={{float: "right", marginRight: 20, marginTop: 10}}>
              <b>Weight:</b> 260 lbs
              </div>
              <br></br><br></br>
              <div >
                <b>Fitlevel:</b> Pro
              </div>
              <div className="bio_words" style={{marginLeft: 10, marginRight: 10, marginTop: 30}}>
                I like bench pressing and squatting! Need somebody who is willing to work hard.
              </div>
            </div>    
          </div>
        </div>
      </SwiperSlide>
    );
  }
  
  return ( 
    <React.Fragment>
    <Swiper 
      id="main" 
      tag="section"
      wrapperTag="ul" 
      navigation
      //pagination   //blue dots in bottom not needed
      spaceBetween={0.5} 
      speed={400}
      slidesPerView={1}
      onInit={(swiper) => console.log('Swiper initialized!', swiper)}
      onSlideChange={(swiper) => console.log('Slide index changed to !', swiper.activeIndex)}
      onReachEnd={() => console.log('Swiper end reached!')}
    >
        {slides}
      </Swiper>
    </React.Fragment>
  );
}

export default SwipePage;


