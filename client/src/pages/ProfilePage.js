import React from 'react'
import './ProfilePage.css';
import Tag from '../components/Tag';


class ProfilePage extends React.Component{
    state= {
        name: "Sett Hein",
        school: "Baruch College",
        year: "Class of 2020",
        major: "Bachelor's in Computer Information Systems",
        classes: [
            "CIS 3100", "MTH 4300", "ENG 31000", "CIS 4400"
        ],
        bio: "I am a senior studying Computer Information Systems at Baruch College. I am also a Software Engineering fellow at CTP where I am learning full-stack Javascript. I love to play sports but very injury-prone",
    }

    render(){
        return(
            <div className="profile">
                <h3>{this.state.name}</h3>
                <br />
                {this.state.school}
                <br />
                {this.state.major}
                <hr />
                <h3>About</h3>
                {this.state.bio}
                <hr />
                <h3>Classes</h3>
                <Tag classes = {this.state.classes}/>
            </div>
        )
    }
}



export default ProfilePage;