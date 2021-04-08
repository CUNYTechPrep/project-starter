import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/dumbbell.png';
import '../App.css';
import '../styles.css';







function swipePage() {
  var person= {  
    "name" : "John Cena",  
    "id" : 312,  
    "preference" : "18+",    
    "height" : 163,    
    "lastOverScore" : [4, 1, 6, 6, 2, 1]

  }


  
  return ( 
    <div class='rectangle'>
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
  );
}

export default swipePage;


