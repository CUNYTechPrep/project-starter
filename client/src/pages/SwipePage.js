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

SwiperCore.use(Navigation);

function SwipePage() {
  const slides=[];

  for (let i=0; i<5; i+=1){
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div class='rectangle'>
          test
          <div class='profile_image'></div>
          <div class='detailcontainer'>
            <div class='name_box'>
              <div class='name_word'> </div>
            </div>
            <div class='preference_box'>
              <div class='preference_word'> John Cena,23</div>
            </div>
            <div class='bio_box'>
              <div class='bio_word'>user bio  awawawawawawawawa</div>
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
      spaceBetween={.5} 
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


