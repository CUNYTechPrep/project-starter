import React from 'react';
import { Redirect } from 'react-router-dom';
import '../Form.css';
import CreatePostCSS from './CreatePost.module.css'
import Helmet from 'react-helmet'
import firebase from '../firebase.js';
import Map from '../components/Map';
import Loading from '../components/Loading';
import Geocode from "react-geocode";
import auth from '../services/auth';
const apiKey = process.env.REACT_APP_MAP_API 

Geocode.setApiKey(apiKey);
Geocode.enableDebug();




const bucket = firebase.storage();

function Form (props) {
    return (

                <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className={CreatePostCSS.card}>
                        <div className="card-body">
                            <form onSubmit={props.onSubmit} className="row g-3">
    
                                <div className="form-group col-md-12">
                                    <label for="title" className="form-label text-warning">Title</label>
                                    <input type="text" name="postTitle" id="title" className="form-control" placeholder="Enter Post Title"/>
                                </div>
    
                                <div className="form-group col-md-12">
                                    <label for="add" className="form-label text-warning">Street Address</label>
                                    <input type="text" name="streetAddress" id="add" className="form-control" placeholder="Enter Street Address" value={`${props.data.streetAddress}`}/>
                                </div>
    
                                <div className="form-group col-md-6">
                                    <label className="form-label text-warning"> Latitude</label>
                                    <input type="number" name="lat" className="form-control" placeholder="Enter Latitude" value={`${props.data.lat}`}/>
                                </div>
    
                                <div className="form-group col-md-6">
                                    <label className="form-label text-warning"> Longitude </label>
                                    <input type="number" name="long" className="form-control" placeholder="Enter Longitude" value={`${props.data.lng}`}/>
                                </div>
    
                                <div className="form-group col-md-5">
                                    <label className="form-label text-warning"> City</label>
                                    <input type="text" name="city" className="form-control" placeholder="Enter City Name" value={`${props.data.city}`}/>
                                </div>
    
                                <div className="form-group col-md-5">
                                    <label className="form-label text-warning"> State</label>
                                    <input type="text" name="state" className="form-control" placeholder="Enter State" value={`${props.data.state}`}/>
                                </div>

                                <div className="form-group col-md-2">
                                    <label className="form-label text-warning"> ZIP Code</label>
                                    <input type="text" name="zipCode" className="form-control" placeholder="Enter Zip Code" value={`${props.data.zip}`}/>
                                </div>

                                <div className="form-group col-md-8">
                                    <label className="form-label text-warning"> Click the button to upload photos </label>
                                    <input type="file" className={CreatePostCSS.picInput}  name="photoAttachment" accept="image/*" required/>
                                </div>

                                <div className="form-group col-md-4">
                                </div>

                                <div className="form-group col-md-12">
                                    <label className="form-label text-warning"> Body</label>
                                    <textarea rows="10" cols="50" name="body" className="form-control" placeholder="Add Post Description"/>
                                </div>
    
                                <div className="form-group col-md-4">
                                </div>
    
                                <div className="form-group col-md-4">
                                    <button className="btn btn-danger m-3" onClick={props.OnCancle} >Cancel</button>
                                    <input type="submit" value="Create" className={`btn ${CreatePostCSS.create_btn}`}/>
     
                                </div>
    
                                <div className="form-group col-md-4">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {props.err}
            </div>

    );
}

class CreatePost extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            isCancle : false,
            success : false,
            dataObj :  {    title : " ",
                            city : " ",
                            state : " ",
                            zip : " ",
                            body : " ",
                            link: " ",
                            userName: auth.userName,
                            streetAddress: " "
                        }, 
        };


    this.handleCancle = this.handleCancle.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
    this.onLocationChange=this.onLocationChange.bind(this);
    }

    componentDidMount(){
        // console.log(this.state.dataObj.userName)
        navigator.geolocation.getCurrentPosition((position) =>{
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);

            this.setState(prevState => {
                let dataObj = { ...prevState.dataObj };
                dataObj.lat = position.coords.latitude;
                dataObj.lng = position.coords.longitude;
                return {dataObj}
            })

            Geocode.fromLatLng( this.state.dataObj.lat , this.state.dataObj.lng ).then(
                response => {
                 const address = response.results[0].formatted_address,
                  addressArray =  response.results[0].address_components

                  console.table(addressArray)
                  console.log(address)
                  let city
                  let state
                  let zipCode

                  addressArray.forEach(type => {
                      
                        if(type.types.includes("political") && city === undefined){
                        city = type.long_name;
                        }else if(type.types.includes("administrative_area_level_1") && state === undefined){
                        // console.log(type.long_name)
                        state = type.long_name;
                        }else if(type.types.includes("postal_code") && zipCode === undefined){
                        // console.log(type.long_name)
                        zipCode = type.long_name;
                        }

                        if(city !== undefined && state!== undefined && zipCode!== undefined){
                            console.log(city)
                            console.log(state)
                            console.log(zipCode)
                            this.setState(prevState => {
                                let dataObj = { ...prevState.dataObj };
                                dataObj.city = city;
                                dataObj.state = state;
                                dataObj.zip = zipCode;
                                dataObj.streetAddress = address.split(",")[0];
                    
                                return {dataObj}
                            })
                        }

                      
                  });
                 
                },
                error => {
                 console.error(error);
                }
               );
          })
    }

    handleSubmit(e){
        e.preventDefault();
        let title = e.target.postTitle.value;
        let lat = e.target.lat.value;
        let lng = e.target.long.value;
        let city = e.target.city.value;
        let state = e.target.state.value;
        let zipCode = e.target.zipCode.value;
        let body = e.target.body.value;
        let file = e.target.photoAttachment.files[0];
        let streetAddress = e.target.streetAddress.value;

        const uploadTask = bucket.ref(`images/${file.name}`).put(file);

        uploadTask.on(
            "state_changed",
            snapshot =>{},
            error =>{
                console.log(error);
            },
            () => {
                bucket
                    .ref("images")
                    .child(file.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log("Url:", url);

                        this.setState(prevState => {
                            let dataObj = { ...prevState.dataObj };
                            dataObj.title = title;
                            dataObj.lat = lat;
                            dataObj.lng = lng;
                            dataObj.city = city;
                            dataObj.state = state;
                            dataObj.zip = zipCode;
                            dataObj.body = body;
                            dataObj.link = url;
                            dataObj.streetAddress = streetAddress;
                
                            return {dataObj}
                        })

                        // console.log(this.state.dataObj);

                        fetch('/api/posts', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(this.state.dataObj),
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Success:', data);
                            this.setState({success: true})
                        })
                        .catch(error => {
                            console.log('Error', error);
                        });

                    })
            }
        )
    }

    onLocationChange(lat, lng){
        Geocode.fromLatLng( lat , lng ).then(
            response => {
             const address = response.results[0].formatted_address,
              addressArray =  response.results[0].address_components
              console.table(addressArray)
              console.log(address)
              

            let city
            let state
            let zipCode

            addressArray.forEach(type => {
                
                if(type.types.includes("political") && city === undefined){
                city = type.long_name;
                }else if(type.types.includes("administrative_area_level_1") && state === undefined){
                // console.log(type.long_name)
                state = type.long_name;
                }else if(type.types.includes("postal_code") && zipCode === undefined){
                // console.log(type.long_name)
                zipCode = type.long_name;
                }
                
                if(city !== undefined && state!== undefined && zipCode!== undefined){
                    console.log(city)
                    console.log(state)
                    console.log(zipCode)
                    this.setState(prevState => {
                        let dataObj = { ...prevState.dataObj };
                        dataObj.city = city;
                        dataObj.state = state;
                        dataObj.zip = zipCode;
                        dataObj.lat = lat;
                        dataObj.lng = lng;
                        dataObj.streetAddress = address.split(",")[0];
            
                        return {dataObj}
                    })
                }
            });
        
            },
            error => {
             console.error(error);
            }
           );
    }

    handleCancle(e){
        e.preventDefault();
        this.setState({
            isCancle : true
        })
    }

    render(){
        if(this.state.success) return <Redirect to="/" />;
        if(this.state.isCancle) return  <Redirect to="/" />;

        let pos = this.state.dataObj
       return (
            <div>
                <Helmet>
                    <body className={CreatePostCSS.CPbody}/>
                    <html className={CreatePostCSS.CPhtml}/>
                </Helmet>
                <div className={CreatePostCSS.container}>
                    {pos.lat ? <Map position={pos} onLocationChange={this.onLocationChange}></Map> : <Loading/>}
                </div>
                <div>
                    {pos.lat ? <Form OnCancle={this.handleCancle} onSubmit={this.handleSubmit} data={pos}/> : <Loading/>}
                </div>
            </div>
       );
        
    }
}

export default CreatePost;