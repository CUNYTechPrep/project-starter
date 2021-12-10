import React from 'react';
import UserPic from '../images/blankProfilePic.png';

function HomePage(props) {
  return (
    <div className="HomePage">

      <h1 className="Logo">Hobbies Hub</h1>
      <br />
      <h2 className="Headers">Recent Matches</h2>

      <div className="row">

        <div className="col-md-3">
          <div class="card">
            <img class="card-img-top" src={UserPic} alt="Matches" />
            <div class="card-body">
              <h5 class="card-title">Andy</h5>
              <button type="button" class="btn btn-primary">Message</button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div class="card">
            <img class="card-img-top" src={UserPic} alt="Matches" />
            <div class="card-body">
              <h5 class="card-title">Ibnat</h5>
              <button type="button" class="btn btn-primary">Message</button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div class="card">
            <img class="card-img-top" src={UserPic} alt="Matches" />
            <div class="card-body">
              <h5 class="card-title">Leah</h5>
              <button type="button" class="btn btn-primary">Message</button>
            </div>
          </div>
        </div>

      </div>

      <h2 className="Headers">Recent Messages</h2>

      <div className="recentMessages">

        <div className="row recents"> <img src={UserPic} alt='User' className="UserPicM"/> &nbsp; Andy</div>
        <div className="row recents"> <img src={UserPic} alt='User' className="UserPicM"/> &nbsp; Ibnat </div>
        <div className="row recents"> <img src={UserPic} alt='User' className="UserPicM"/> &nbsp; Leah </div>

      </div>


    </div>

  );
}

export default HomePage;