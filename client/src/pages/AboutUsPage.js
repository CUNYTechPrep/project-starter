import React from 'react';
//import ResizeImage from 'react-resize-image';
import logo from '../img/dumbbell.png';
import Farhene from '../img/Ria.jpg';
import Justin from '../img/Justin.png';
import Omar from '../img/edgar.jpeg';
import Yun from '../img/Yun.png';
import '../css/AboutUsPage.css';

function AboutUsPage(props) {
  return (
    <div>
      <div className="div-heading">
        <h1>About Us!</h1>
        <div class="flex-container">
          <div style={{ marginRight: 20, marginLeft: 20 }}>
            <img
              className="profile-pictures"
              alt="farhene"
              src={Farhene}
              style={{
                width: 245,
                height: 310,
                borderRadius: 30,
                border: '3px ridge #4244DF',
              }}
            />
            <div>
              <div
                style={{
                  backgroundColor: '#3D8DE9',
                  borderRadius: 10,
                  maxWidth: 250,
                }}
              >
                <div
                  style={{
                    color: '#031161',
                    marginRight: 20,
                    marginLeft: 25,
                    fontSize: 25,
                  }}
                >
                  <b>Farhene Sultana</b>
                </div>
                <div style={{ fontSize: 17, color: '#FDFDFD' }}>
                  <h4 style={{ fontSize: 14 }}>
                    Comp Sci Student @ CUNY Hunter
                  </h4>
                  <h4 style={{ fontSize: 13.5, marginLeft: 20, maxWidth: 200 }}>
                    I am a Web Developer Fellow at CUNY Tech Prep and an iOS
                    Student at Codepath majoring in Computer Science. As for
                    skills, I have knowledge of
                    <div className="dropdown">
                      <span>full stack development.</span>
                      <div className="dropdown-content">
                        <p>
                          JavaScript, HTML, CSS, C++, a bit of Python, Swift,
                          Reactjs, Gatsbyjs, and a bit of Flutter, as well as
                          Nodejs, Expressjs, PostgreSQL and SQL.
                        </p>
                      </div>
                    </div>
                    <br></br>I aspire to be a
                    <div className="dropdown">
                      <span>
                        Cybersecurity Specialist while harboring Full Stack
                        Developer tools.
                      </span>
                      <div className="dropdown-content">
                        <p>
                          I want to attain a Master's Degree in Cybersecurity
                          and that way I can eventually know what exactly I
                          position in this career field I would want to go for
                          :3
                        </p>
                      </div>
                    </div>
                    <p style={{ color: '#354FA3' }}>................</p>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginRight: 20, marginLeft: 20 }}>
            <img
              className="profile-pictures"
              alt="justin"
              src={Justin}
              style={{
                width: 255,
                height: 310,
                borderRadius: 30,
                border: '3px ridge #4244DF',
              }}
            />
            <div>
              <div
                style={{
                  backgroundColor: '#3D8DE9',
                  borderRadius: 10,
                  marginRight: 10,
                  marginLeft: 10,
                  maxWidth: 305,
                }}
              >
                <div
                  style={{
                    color: '#031161',
                    marginRight: 20,
                    marginLeft: 25,
                    fontSize: 25,
                  }}
                >
                  <b>Justin Kuang</b>
                </div>
                <div style={{ fontSize: 17, color: 'white' }}>
                  <h4 style={{ fontSize: 14, marginLeft: 4, marginRight: 5 }}>
                    Comp Sci Student @ CUNY Hunter
                  </h4>
                  <h4 style={{ fontSize: 13.5, marginLeft: 15, maxWidth: 200 }}>
                    I am a Web Developer Fellow at CUNY Tech Prep as well learning fullstack.
                    <div className="dropdown">
                      <span> Mainly into FrontEnd Development and familiar with select libraries.</span>
                      <div className="dropdown-content">
                        <p>C++, JavaScript, Reactjs, HTML, CSS, PostgreSQL </p>
                      </div>
                    </div>
                    <br></br>
                    <div className="dropdown">
                      <span>I aspire to be a Web Developer.</span>
                      <div className="dropdown-content">
                        <p>I want to be able to develop complex and aesthetically pleasing web applications for myself and for others</p>
                      </div>
                    </div>
                    <p style={{ color: '#3D8DE9' }}>................</p>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginRight: 20, marginLeft: 20 }}>
            <img
              className="profile-pictures"
              alt="edgar"
              src={Omar}
              style={{
                width: 285,
                height: 310,
                borderRadius: 30,
                border: '3px ridge #4244DF',
              }}
            />
            <div>
              <div
                style={{
                  backgroundColor: '#3D8DE9',
                  borderRadius: 10,
                  marginRight: 10,
                  marginLeft: 10,
                }}
              >
                <div
                  style={{
                    color: '#031161',
                    marginRight: 20,
                    marginLeft: 25,
                    fontSize: 25,
                  }}
                >
                  <b>Edgar Quintero</b>
                </div>
                <div style={{ fontSize: 17, color: 'white' }}>
                  <h4 style={{ fontSize: 14, marginLeft: 5, marginRight: 5 }}>
                    Comp Sci Student @ CUNY City Tech
                  </h4>
                  <h4 style={{ fontSize: 13.5, marginLeft: 20, maxWidth: 200 }}>
                   I am currently a student focused in web development
                   and looking to expand my skills in order 
                   to exceed my own expectations. I want to becomea software developer
                    and create desktop applications.
                                    <div className="dropdown">
                      <span>Full Stack Development.</span>
                      <div className="dropdown-content">
                        <p> OOP Java, Apache,JAVA FX,JavaScript, PHP, JSP , HTML, CSS, C++, Python,
                           Android Studio,Reactjs, C#,Nodejs, Expressjs, Mongo DB, PostgreSQL, SQL.
                           </p>
                      </div>
                    </div>
                    <br></br>I aspire to be 
                    <div className="dropdown">
                      <span>a Software Developer working on embedded systems</span>
                      <div className="dropdown-content">
                        <p>I want to attain a Bachelor's Degree in Computer Science
                          to pursue a fullstack developemnt career at a company working on
                           Electric vehicles</p>
                      </div>
                    </div>
                    <p style={{ color: '#3D8DE9' }}>................</p>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginRight: 20, marginLeft: 20 }}>
            <img
              className="profile-pictures"
              alt="yun"
              src={Yun}
              style={{
                width: 275,
                height: 330,
                borderRadius: 30,
                border: '3px ridge #4244DF',
              }}
            />
            <div>
              <div
                style={{
                  backgroundColor: '#3D8DE9',
                  borderRadius: 10,
                  marginRight: 10,
                  marginLeft: 10,
                }}
              >
                <div
                  style={{
                    color: '#031161',
                    marginRight: 20,
                    marginLeft: 25,
                    fontSize: 25,
                  }}
                >
                  <b>Yun Tang</b>
                </div>
                <div style={{ fontSize: 17, color: 'white' }}>
                  <h4 style={{ fontSize: 14, marginLeft: 5, marginRight: 5 }}>
                    Comp Sci Student @ CUNY Brooklyn
                  </h4>
                  <h4 style={{ fontSize: 13.5, marginLeft: 20, maxWidth: 200 }}>
                    I'm a Web Developer Fellow at CUNY Tech Prep who aspires to be a Product Manager.
                    <div className="dropdown">
                      <span>FrontEnd development.</span>
                      <div className="dropdown-content">
                        <p>Reactjs, Java, JavaScript, HHTML, CSS, C++</p>
                      </div>
                    </div>

                    <p style={{ color: '#3D8DE9' }}>................</p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div></div>
    </div>
  );
}

export default AboutUsPage;
