import React from 'react';
import NavBarCSS from './NavBarComps.module.css'
import auth from '../services/auth';
import { withRouter} from 'react-router-dom';

const ProfilePic = withRouter(({ history }) => {
    if(!auth.isAuthenticated){
        let link = "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
        console.log("unauthorized")
        return(
            <div>
                <img src={link} alt="profile" className={NavBarCSS.profile}/>
            </div>
        )
    } 

    let link = auth.user.profilePic
    console.log(link)
    const handleClick = () => {
         history.push('/profile');
      }

    return (
        <div onClick={()=> handleClick()}>
            <img src= {link} alt="profile" className={NavBarCSS.profile}/>
        </div>
    )

 })

export default ProfilePic;