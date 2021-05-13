  
import React from 'react'
import 'w3-css/w3.css';
import '../styles.css';
import Profile from '../components/Profile/Profile';
import Loading from '../components/Loading';
import '../css/SwipePage.css';
import auth from '../services/auth.js';
// import TinderCard from 'react-tinder-card';
// import Switch from 'react-ios-switch';


class SwipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      loading: true,
      // end: null,
      // swipeLeft: null,
      // swipeRight: null,
      // lastDirection: "",
    };
  }

  componentDidMount() {
    fetch("/api/users")
    .then(res => res.json())
    .then(profiles => {
      this.setState({
        id: auth.currentUser.id,
        loading: false,
        profiles: profiles.map((p, ii) => 
          <Profile {...p} key={ii} />
          ),
      });
    })
    .catch(err => console.log("API ERROR: ", err));
  }

  // outOfFrame = (name) => {
  //   console.log(name + ' left the screen!');
  // }

  // swiped = (direction, nameToDelete) => {
  //   console.log('removing: ' + nameToDelete);
  //   this.setState(
  //     {
  //       lastDirection: direction
  //     }
  //   )
  // }

  render() {
    if(this.state.loading) //API info retrieval loading 
      return <Loading />

    let slides=[];

    for(let i=0; i < this.state.profiles.length; i+=1){
      if(this.state.profiles[i].props.id !== this.state.id){
        slides.push(this.state.profiles[i]);
      }
    }

    return (
    //   <div>
    //   <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
    //   <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
    //   <h1>Title</h1>
    //   <div className='cardContainer'>
    //     {slides.map((slides) =>
    //       <TinderCard className='swipe' key={slides.name} onSwipe={(dir) => this.props.swiped(dir, slides.name)} onCardLeftScreen={() => this.props.outOfFrame(slides.name)}>
    //         <div className='card'>
    //           {slides}
    //         </div>
    //       </TinderCard>
    //     )}
    //   </div>
    //   {this.state.lastDirection ? <h2 className='infoText'>You swiped {this.state.lastDirection}</h2> : <h2 className='infoText' />}
    // </div>
    null
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

