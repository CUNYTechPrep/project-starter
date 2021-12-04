import React from 'react';
import UserPic from '../images/blankProfilePic.png';

function ProfilePage(props) {
    return (
        <div className="ProfilePage">

            <div className="Contain">

                <div className="row">

                    <div className="col-md-3 align-self-center profileCol">

                        <div className="keepProfile">

                            <img className="profileProfile" src={UserPic} alt="Profile" />
                            <br/>
                            <div className="Username"> Username </div>

                        </div>

                    </div>

                    <div className="col-md profileCol2">
                        <div className="moveProfile">
                            <div className="myInfo"> &nbsp; Basic Information</div>
                            <br />

                            <div className="userInfo"><label>First Name:</label> <input className="changeInput" type="text" value="Jane"></input> </div>
                            <div className="userInfo"><label>Last Name:</label> <input className="changeInput" type="text" value="Doe"></input> </div>
                            <div className="userInfo"><label>Username:</label> <input className="changeInput" type="text" value="Username"></input> </div>
                            <div className="userInfo"><label>Email:</label> <input className="changeInput" type="text" value="JaneDoe123@gmail.com"></input> </div>
                            <div className="userInfo"><label>First Name:</label> <input className="changeInput" type="text" value="12/25/1990"></input> </div>
                            <br />

                            <div className="myInfo"> &nbsp; Hobby Related Information</div>
                            <br />
                            <div className="userInfo"><label>Hobby:</label> <input className="changeInput" type="text" value="Interior Design"></input></div>
                            <div className="userInfo"><label>Looking For:</label> <input className="changeInput" type="text" value="A project partner"></input> </div>

                            <br/>
                            <br/>
                            <button type="button" class="btn btn-primary">Edit</button>

                        </div>


                    </div>

                </div>


            </div>

        </div>

    );
}

export default ProfilePage;