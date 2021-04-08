import React from 'react';
import { Redirect } from 'react-router-dom';
import '../Form.css'

function Form (props) {
    return (

                <form className="bg-secondary p-5 row g-3" onSubmit={props.onSubmit}>
                    <div className="col-12 ">
                        <label className="form-label text-warning">Title :</label>
                        <input type="text" name="postTitle" className="form-control" placeholder="Enter Post Title"/>
            
                    </div>

                    <div className="col-md-6">
                        <label className="form-label text-warning"> Latitude :</label>
                        <input type="text" name="lat" className="form-control" placeholder="Enter Latitude"/>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label text-warning"> Longitude : </label>
                        <input type="text" name="long" className="form-control" placeholder="Enter Longitude"/>
                    </div>


                    <div className="col-md-5">
                        <label className="form-label text-warning"> City : </label>
                        <input type="text" name="city" className="form-control" placeholder="Enter City Name"/>
                    </div>

                    <div className="col-md-5">
                        <label className="form-label text-warning"> State : </label>
                        <input type="text" name="state" className="form-control" placeholder="Enter State"/>
                    </div>

                    <div className="col-md-2">
                        <label className="form-label text-warning"> ZIP Code : </label>
                        <input type="text" name="zipCode" className="form-control" placeholder="Enter Zip Code"/>
                    </div>
                    

                    <div className="col-md-12" >
                        <label className="form-label text-warning"> Click the button to upload photos : </label>
                        <input type="file"  name="photoAttachment" />
                    </div>

                    <div className="col-12">
                        <label className="form-label text-warning"> Body : </label>
                        <textarea rows="10" cols="50" name="body" className="form-control" placeholder="Add Post Description"/>
                    </div>

                    <div className="col-12">
                        <input  className="btn btn-primary m-3" type="submit"/>
                        <button className="btn btn-danger m-3" onClick={props.OnCancle} >Cancel</button>
                    </div>
                </form>

    );
}

class CreatePost extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            isCancle : false,
            success : false,
            dataObj :  {   title : " ",
                            lat : " ",
                            long : " ",
                            city : " ",
                            state : " ",
                            zip : " ",
                            body : " "
                        }
        };


    this.handleCancle = this.handleCancle.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let title = e.target.postTitle.value;
        let lat = e.target.lat.value;
        let long = e.target.long.value;
        let city = e.target.city.value;
        let state = e.target.state.value;
        let zipCode = e.target.zipCode.value;
        let body = e.target.body.value;

        this.setState(prevState => {
            let dataObj = { ...prevState.dataObj };
            dataObj.title = title;
            dataObj.lat = lat;
            dataObj.long = long;
            dataObj.city = city;
            dataObj.state = state;
            dataObj.zip = zipCode;
            dataObj.body = body;

            return {dataObj}
        })

        this.setState({
            success : true
        })
    }


    handleCancle(e){
        e.preventDefault();
        console.log("clicked POGGGGG")
        this.setState({
            isCancle : true
        })
    }

    render(){
        console.log(this.state.dataObj)
        if(this.state.success) return <Redirect to="/" />;
       else if(this.state.isCancle) return  <Redirect to="/" /> ;
       return (
            <Form OnCancle={this.handleCancle} onSubmit={this.handleSubmit}/> 
       );
        
    }
}

export default CreatePost;