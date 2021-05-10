import React from 'react';
import 'w3-css/w3.css';
import '../styles.css';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper'
import'swiper/swiper-bundle.css';
import Profile from '../components/Profile/Profile';
import Loading from '../components/Loading';
SwiperCore.use([Navigation]);

class SwipePage extends React.Component {
  state = {
    profiles: [],
    loading: true,
  }

  componentDidMount() {
    fetch("/api/users")
    .then(res => res.json())
    .then(profiles => {
      this.setState({
        loading: false,
        profiles: profiles.map((p, ii) => <Profile {...p} key={ii} />),
      });
    })
    .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) //API info retrieval loading 
      return <Loading />
    
    let slides = []; //we needed a new array to be modified, because we cannot modify the state itself without setState.  
    
    for (let i=0; i<this.state.profiles.length; i+=1){       
      slides.push(
        <SwiperSlide key={`slide-${i}`} tag="ul">
          <div class='rectangle'>
            {this.state.profiles[i]}
          </div>
        </SwiperSlide>
      );
//after everyone has been swiped, transfer them to another array of already been swiped.

//Notes for possibly cyclic loop
//look at Swiper library in React and they prob have a way of detecting if you swiped left or right
// look for default behavior to bring the next slides

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
}

export default SwipePage;

// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFXY2dx8oaeL9wTegcl2HMui-IIYYchJY&callback=initMap">
// send data to back end point 
// save their location upon the creation of their account since not all users are always online
// Ask users for their zipcode and then compare their zipcodes for area check
// compare against the user's last known location


//FOR SWIPER SLIDES
    //Fetch data from the api that has all the profiles
    // sends back an array and we do this forloop and we push the real data into
    //  these slides...
    // then we will see real profiles back and forth as we swipe.
    // anytime you want to get information with express we have to use FETCH, POST,GET...etc
    // We will use ANOTHER fetch call to know if the swipe was left or right.

