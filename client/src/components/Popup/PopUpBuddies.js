import 'w3-css/w3.css'; 
import React from "react";
import '../../css/Popup.css';
import '../../css/ProfilePage.css';
import MatchedProfile from  '../Profile/MatchedProfile';
import auth from '../../services/auth.js';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';
import'swiper/swiper-bundle.css';

class PopupBuddies extends React.Component {
  state = {
    potentialmatches: [],
  }
  
  //LEVEL 1: Get ALL Swipe Records from the Swipe Table
  componentDidMount() {
    fetch("/api/users/records")
    .then(res => res.json())
    .then(profiles => {
      this.setState({
        potentialmatches: profiles
      });
    })
    .catch(err => console.log("API ERROR: ", err));
  }
    render() {
      //Produce code to find matches here through a series of steps

      // LEVEL 2 - Get ONLY True Statueses
      let narrowedPotentialMatches =[]; //this is the one we want 
      for(let i = 0; i < this.state.potentialmatches.length; i+=1){

        let check = JSON.stringify(this.state.potentialmatches[i].status);

        if(check === "true"){
          narrowedPotentialMatches.push(
            this.state.potentialmatches[i]
          );
        }
      }

      if(narrowedPotentialMatches.length > 0)
        console.log(narrowedPotentialMatches); //this will hold all narrowed down matches to only true statuses

      //LEVEL 3 - Get now the matches
      //Now next step, find cases where we have trues for between the auth.currentUser and the Swipees
      
      let SwipeesArray = []
      
      for(let j = 0; j < narrowedPotentialMatches.length; j+=1){
        let userIndex = narrowedPotentialMatches[j];
        
        if(userIndex.swiperId === auth.currentUser.id){
          SwipeesArray.push(userIndex.swipeeId);
        }
      }

      let matches = []
      
      for(let j = 0; j < narrowedPotentialMatches.length; j+=1){
        let userIndex = narrowedPotentialMatches[j];
        if(userIndex.swipeeId === auth.currentUser.id){
          if (SwipeesArray.includes(userIndex.swiperId)) {
            matches.push(userIndex)
          }
        }
      }

      if(matches.length > 0)
        console.log(matches);
      
      let slides = []

      for (let i=0; i<matches.length; i+=1){       
        slides.push(
          <SwiperSlide key={`slide-${i}`} tag="ul">
            {/* <div class='cardContainer'> */}
              <MatchedProfile profile={matches[i]} />
            {/* </div> */}
          </SwiperSlide>
        );
      }

      return (
        <div className='popup'>
          <div className='popup-buddies'>
            <h1 style={{marginBottom: 30, marginTop: 30}}>
              {this.props.text}
            </h1>

            <React.Fragment>
              <Swiper 
                id="main" 
                tag="section"
                wrapperTag="ul" 
                navigation
                pagination   //blue dots in bottom not needed
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


          <button className= " button-edits" style={{height: 50, width: 300, borderRadius: 30, marginTop: 40}}
            onClick={this.props.closeBuddiesPopup}> 
            Exit 
          </button>
          </div>
        </div>
      );
    }
  }
  
  export default PopupBuddies;