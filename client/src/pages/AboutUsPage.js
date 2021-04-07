import React from 'react';
import ResizeImage from 'react-resize-image';
import logo from '../img/dumbbell.png';
import Farhene from '../img/Ria.jpg';
import Justin from '../img/Justin.png';
import '../css/AboutUsPage.css';

function AboutUsPage(props) {
  return (
      <div>
        <div className="div-heading">
        <h1>About Us!</h1>
          <div class="flex-container">
            <div style={{marginRight: 20, marginLeft: 20}}>
              <img className="profile-pictures" src={Farhene}
                style={{width: 245, height: 310, 
                  borderRadius: 30, border: '3px ridge #45C493'}}
              />
              <div>
                <div style={{backgroundColor: "#88E0BE", borderRadius: 10, maxWidth: 250}}>
                  <div style={{color: "#FF2DA1" , 
                     marginRight: 20, marginLeft: 25, fontSize: 25}} >
                    <b>Farhene Sultana</b>
                  </div>
                  <div style={{fontSize: 17, color: "#2C443B"}}>
                    <h4 style={{fontSize: 14}}>
                      Comp Sci Student @ CUNY Hunter
                    </h4>
                    <h4 style={{fontSize: 13.5, marginLeft: 20, maxWidth: 200}}>
                      I am a Web Developer Fellow at CUNY Tech Prep and an iOS Student at Codepath 
                      majoring in Computer Science. As for skills, I have knowledge of 
                      <div className="dropdown">
                        <span>
                          full stack development.
                        </span>
                        <div className="dropdown-content"> 
                          <p>
                            JavaScript, HTML, CSS, C++, a bit of Python, Swift, Reactjs, Gatsbyjs, and a bit
                            of Flutter, as well as Nodejs, Expressjs, PostgreSQL and SQL.
                          </p>
                        </div>
                      </div> 
                      <br></br>
                      I aspire to be a 
                      <div className="dropdown">
                        <span>
                          Cybersecurity Specialist while harboring Full Stack Developer
                          tools. 
                        </span>
                        <div className="dropdown-content"> 
                          <p>
                            I want to attain a Master's Degree in Cybersecurity and that way I can eventually
                              know what exactly I position in this career field I would want to go for :3
                          </p>
                        </div>
                      </div>  
                        <p style={{color: "#88E0BE"}}>................</p>
                    </h4>
                  </div>
                </div>
              </div>
            </div>


            <div  style={{marginRight: 20, marginLeft: 20}}>
              <img className="profile-pictures" src={Justin}
                style={{width: 255, height: 310, 
                  borderRadius: 30, border: '3px ridge #88E0BE'}}              
              />
              <div>
                <div style={{backgroundColor: "#88E0BE", borderRadius: 10, marginRight: 10, marginLeft: 10,
                  maxWidth: 305}}>
                  <div style={{color: "#2656B1", 
                    marginRight: 20, marginLeft: 25, fontSize: 25}}>
                    <b>Justin Kuang</b>
                  </div>
                  <div style={{fontSize: 17, color: "#2C443B"}}>
                    <h4 style={{fontSize: 14, marginLeft: 4, marginRight: 5}}>
                      Comp Sci Student @ CUNY Hunter
                    </h4>
                    <h4 style={{fontSize: 13.5, marginLeft: 15, maxWidth: 200}}>
                      Your bio 
                      <div className="dropdown">
                        <span>
                          front [or end or full stack] development.
                        </span>
                        <div className="dropdown-content"> 
                          <p>
                            Type your skills here
                          </p>
                        </div>
                      </div> 
                      <br></br>
                      I aspire to be a 
                      <div className="dropdown">
                        <span>
                          [Type your future goal here] 
                        </span>
                        <div className="dropdown-content"> 
                          <p>
                            [Explain your goal here]
                          </p>
                        </div>
                      </div>  
                        <p style={{color: "#88E0BE"}}>................</p>
                    </h4>
                  </div>
                </div>
              </div>
            </div>


            <div style={{marginRight: 20, marginLeft: 20}}>
              <img className="profile-pictures" src={logo}
                style={{width: 255, height: 310, 
                  borderRadius: 30, border: '3px ridge #45C493'}}
              />
              <div>
                <div style={{backgroundColor: "#88E0BE", borderRadius: 10, marginRight: 10, marginLeft: 10}}>
                  <div style={{color: "green", 
                    marginRight: 20, marginLeft: 25, fontSize: 25}}>
                    <b>Edgar Quintero</b>
                  </div>
                  <div style={{fontSize: 17, color: "#2C443B"}}>
                    <h4 style={{fontSize: 14, marginLeft: 5, marginRight: 5}}>
                      Comp Sci Student @ CUNY City Tech
                    </h4>
                    <h4 style={{fontSize: 13.5, marginLeft: 20, maxWidth: 200}}>
                      Your bio 
                      <div className="dropdown">
                        <span>
                          front [or end or full stack] development.
                        </span>
                        <div className="dropdown-content"> 
                          <p>
                            Type your skills here
                          </p>
                        </div>
                      </div> 
                      <br></br>
                      I aspire to be a 
                      <div className="dropdown">
                        <span>
                          [Type your future goal here] 
                        </span>
                        <div className="dropdown-content"> 
                          <p>
                            [Explain your goal here]
                          </p>
                        </div>
                      </div>  
                        <p style={{color: "#88E0BE"}}>................</p>
                    </h4>
                  </div>
                </div>
              </div>
            </div>


            <div style={{marginRight: 20, marginLeft: 20}}>
              <img className="profile-pictures" src={logo}
                style={{width: 255, height: 310, 
                  borderRadius: 30, border: '3px ridge #88E0BE'}}
              />
              <div>
                <div style={{backgroundColor: "#88E0BE", borderRadius: 10, marginRight: 10, marginLeft: 10}}>
                  <div style={{color: "#DD1D3D", 
                    marginRight: 20, marginLeft: 25, fontSize: 25}}>
                    <b>Yun Tang</b>
                  </div>
                  <div style={{fontSize: 17, color: "#2C443B"}}>
                    <h4 style={{fontSize: 14, marginLeft: 5, marginRight: 5}}>
                      Comp Sci Student @ CUNY Brooklyn
                    </h4>
                    <h4 style={{fontSize: 13.5, marginLeft: 20, maxWidth: 200}}>
                      Your bio 
                      <div className="dropdown">
                        <span>
                          front [or end or full stack] development.
                        </span>
                        <div className="dropdown-content"> 
                          <p>
                            Type your skills here
                          </p>
                        </div>
                      </div> 
                      <br></br>
                      I aspire to be a 
                      <div className="dropdown">
                        <span>
                          [Type your future goal here] 
                        </span>
                        <div className="dropdown-content"> 
                          <p>
                            [Explain your goal here]
                          </p>
                        </div>
                      </div>  
                        <p style={{color: "#88E0BE"}}>................</p>
                    </h4>
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