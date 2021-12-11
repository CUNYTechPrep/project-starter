import React, {useState} from 'react'; 
import UserPic from '../images/userpic.png';


function ProfilePage(props) {

    const [firstName,setFirstName] = useState("Jane")
    const [lastName,setLastName] = useState("Doe")
    const [userName,setUserName] = useState("JaneDoe123")
    const [email,setEmail] = useState("JaneDoe123@gmail.com")

    function onChange(e,state) {
        if(state === "firstName")setFirstName(e.target.value)
        else if(state === "lastName")setLastName(e.target.value)
        else if(state === "userName")setUserName(e.target.value)
        else if(state === "email")setEmail(e.target.value)
    }

    return (
        <div className="ProfilePage">

            <div className="Contain">

                <div className="row">

                    <div className="col-md-3 align-self-center profileCol">

                        <div className="keepProfile">

                            <img className="profileProfile" src={UserPic} alt="Profile" />
                            <br/>
                            <div className="Username"> JaneDoe123 </div>

                        </div>

                    </div>


                    <div className="col-md profileCol2">
                        <div className="moveProfile">
                            <div className="myInfo"> &nbsp; Basic Information</div>
                            <br />

                            <div className="userInfo"><label>First Name:</label> <input className="changeInput" type="text" value={firstName} onChange={e => onChange(e,"firstName")}></input> </div>
                            <div className="userInfo"><label>Last Name:</label> <input className="changeInput" type="text" value={lastName} onChange={e => onChange(e,"lastName")}></input> </div>
                            <div className="userInfo"><label>Username:</label> <input className="changeInput" type="text" value={userName} onChange={e => onChange(e,"userName")}></input> </div>
                            <div className="userInfo"><label>Email:</label> <input className="changeInput" type="text" value={email} onChange={e => onChange(e,"email")}></input> </div>
                            <div className="userInfo"><label>Date of Birth:</label> <input className="changeInput" type="text" value="12/24/1986" disabled></input> </div>
                            <br />

                            <div className="myInfo"> &nbsp; Hobby Related Information</div>
                            <br />
                            <div className="userInfo"><label>Hobby:</label> <input className="changeInput" type="text" value="Interior Design" disabled></input></div>
                            <div className="userInfo"><label>Looking For:</label> <input className="changeInput" type="text" value="A project partner" disabled></input> </div>

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