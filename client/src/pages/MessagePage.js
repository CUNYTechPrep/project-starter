import React from 'react';
import UserPic from '../images/blankProfilePic.png';

function MessagePage(props) {
  return (
    <div className="MessagePage">

      <h1 className="Logo">Hobbies Hub</h1>
      <br />
      <h2 className="Headers">Messages</h2>

      <div className="container">
        <div className="row">
          <div className="col-3 colMessages">
            <div className="MoveDownMessages">
            <div className="row messageView"> <img src={UserPic} alt='User' className="UserPicM"/> &nbsp; Name #1</div>
            <hr/>
            <div className="row messageView"> <img src={UserPic} alt='User' className="UserPicM"/> &nbsp; Name #2</div>
            <hr/>
            <div className="row messageView"> <img src={UserPic} alt='User' className="UserPicM"/> &nbsp; Name #3</div>
            </div>
          </div>
          <div className="col-8 contains">
            <div className="MatchUsername"> <img src={UserPic} alt='User' className="UserPicM"/> &nbsp; Match's Username <hr /></div>
            <div className="contentHere">  </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Type Here..."
                className="form-control mr-3 rounded"
              />
              <button className="input-group-addon">Send</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default MessagePage;