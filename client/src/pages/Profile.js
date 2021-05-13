import React from 'react';
import Tag from '../components/Tag';
import Helmet from 'react-helmet';
import { Redirect } from 'react-router-dom';
import auth from '../services/auth';
import Loading from '../components/Loading';
import Postcard from '../components/Postcard';
import './Profile.css';

function ProfilePage(props) {

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='profile-info'>
            <div className="p-5 row g-3">
                <div className="col-6">
                    <input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} style={{ display: "none" }} />
                    <div onClick={() => imageUploader.current.click()}>
                        <img ref={uploadedImage} src={props.info.profilePic} className="profilePic" />
                    </div>
                Click to upload profile picture
                </div>

                <div className='col-4 pt-4 justify-content-center text-center'>
                    <p className='text-warning'>First Name: <span className="text-white">{props.info.fName}</span></p>

                    <p className='text-warning'>Last Name: <span className="text-white">{props.info.lName}</span></p>
        
                    <p className='text-warning'>Email: <span className="text-white">{props.info.email}</span></p>
                
                    <p className='text-warning'>Birth Date: <span className="text-white">{props.info.birthDate}</span></p>
                </div>



        </div>


        </div >
    );
}

function Tags(props) {

    return (

        <div className="tag-section my-5">
            <div className='row justify-content-around bg-secondary'>

                <div className='col-md-4 p-3'>
                    <Tag category='Tag1' />
                </div>

                <div className='col-md-4 p-3'>
                    <Tag category='Tag2' />
                </div>

                <div className='col-md-4 p-3'>
                    <Tag category='Tag3' />
                </div>

                <div className='col-md-4 p-3'>
                    <Tag category='Tag4' />
                </div>



            </div>
        </div>
    )
}

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: auth.user,
            posts: [],
            loading: true,
        }


        //this.handleSubmit= this.handleSubmit.bind(this);
        //this.handleCancle= this.handleCancle.bind(this);
    }

    componentDidMount() {
        //const { id } = this.props.match.params;

        console.log(this.state.userInfo);

        fetch("./api/posts/getByUser/" + this.state.userInfo.userName)
            .then(res => res.json())
            .then(post => {
                console.log(post);
                this.setState({
                    posts: post,
                    loading: false,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        if (this.state.loading) return <Loading />
        return (
            <div>
                <Helmet>
                    <body className='profile-page' />
                    <html className='profile-page' />
                </Helmet>

                <div>
                    <ProfilePage info={this.state.userInfo} />
                    <div className='posts'>
                        {
                            this.state.posts.map((post, id) => {

                                return <div className='d-flex justify-content-center text-center' key={id}><Postcard /></div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }


}

export default Profile;