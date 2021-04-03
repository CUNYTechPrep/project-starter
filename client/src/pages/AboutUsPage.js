import React from 'react';
import ResizeImage from 'react-resize-image';
import logo from '../img/dumbbell.png';
import Farhene from '../img/Ria.jpg';
import Justin from '../img/Justin.png';

function AboutUsPage(props) {
  return (
      <div>
        <div className="div-heading">
        <h1>About Us!</h1>
          <div class="flex-container">
            <div class=".col-auto .mr-auto">
              <img className="profile-pictures" src={Farhene}
                style={{width: 245, height: 310, 
                  borderRadius: 30, border: '3px ridge #45C493', zIndex: 3}}
              />
              <div>
                <div style={{backgroundColor: "#88E0BE", borderRadius: 10}}>
                  <div style={{color: "#FF2DA1" , 
                     marginRight: 20, marginLeft: 25}} >
                    Farhene Sultana
                  </div>
                  <div style={{fontSize: 17, color: "#2C443B"}}>
                    Biojsjjsws
                  </div>
                </div>
              </div>
            </div>


            <div class=".col-auto .mr-auto">
              <img className="profile-pictures" src={Justin}
                style={{width: 255, height: 310, 
                  borderRadius: 30, border: '3px ridge #88E0BE', zIndex: 3}}              
              />
              <div>
                <div style={{backgroundColor: "#88E0BE", borderRadius: 10, marginRight: 10, marginLeft: 10}}>
                  <div style={{color: "#2656B1", 
                    marginRight: 20, marginLeft: 25}}>
                    Justin Kuang
                  </div>
                  <div style={{fontSize: 17, color: "#2C443B"}}>
                    Biojsjjsws
                  </div>
                </div>
              </div>
            </div>


            <div class=".col-auto .mr-auto">
              <img className="profile-pictures" src={logo}
                style={{width: 255, height: 310, 
                  borderRadius: 30, border: '3px ridge #45C493', zIndex: 3}}
              />
              <div>
                <div style={{backgroundColor: "#88E0BE", borderRadius: 10, marginRight: 10, marginLeft: 10}}>
                  <div style={{color: "green", 
                    marginRight: 20, marginLeft: 25}}>
                    Edgar Quintero
                  </div>
                  <div style={{fontSize: 17, color: "#2C443B"}}>
                    Biojsjjsws
                  </div>
                </div>
              </div>
            </div>


            <div class=".col-auto .mr-auto">
              <img className="profile-pictures" src={logo}
                style={{width: 255, height: 310, 
                  borderRadius: 30, border: '3px ridge #88E0BE', zIndex: 3}}
              />
              <div>
                <div style={{backgroundColor: "#88E0BE", borderRadius: 10, marginRight: 10, marginLeft: 10}}>
                  <div style={{color: "#DD1D3D", 
                    marginRight: 20, marginLeft: 25}}>
                    Yun Tang
                  </div>
                  <div style={{fontSize: 17, color: "#2C443B"}}>
                    Biojsjjsws
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <br></br>
        <div>

        </div>
      </div>
      
    
  );
}

export default AboutUsPage;