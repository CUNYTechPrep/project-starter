import React from "react";

function AboutUsPage(props) {
  return (
    <>
      <div className="col text-center">
        <h2 className="mb-3"> About Media Compass</h2>
        <p className="mb-5">
       We want to connect users to content by giving customized movie and TV series recommendations across multiple streaming services tailored to their favorite genres and interests. Users will be able to rate and comment on any content on our app and view others ratings to get an opinion about the quality of the content and whether it’s worth watching or not.        </p>
        <h2 className="mb-3">Our Team</h2>
        <div className="row">
          <div className="col-lg-3">
            <h3>Rajeev Basanta</h3>
            <p>
            Email: rajeev.basanta@gmail.com
            <br />
            Github Username: rjvbsta
            <br />
            School: Brooklyn College 

            </p>
          </div>
          <div className="col-lg-3">
            <h3>Rodler Jean</h3>
            <p>
            Email: rodjean1234@gmail.com	
            <br />
            Github Username: rodjean1234
            <br />	
            School: Brooklyn College

            </p>
          </div>
          <div className="col-lg-3">
            <h3>Edison Murataj</h3>
            <p>
            Email: edismur2@gmail.com	
            <br />	
            Github Username: edis123
            <br />
            School: Queens College

            </p>
          </div>
          <div className="col-lg-3">
            <h3>Marina Sukhova
</h3>
            <p>
            Email: SukhovaMarina12@gmail.com
            <br />
            Github Username: Marina-Sukhova
            <br />
            School: College of Staten Island

            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
