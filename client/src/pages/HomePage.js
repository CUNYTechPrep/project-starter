import React from 'react';
import { Redirect } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
//import Button from 'react-bootstrap/Button'
import {Form, Button, FormGroup, Carousel, Label, Input, Col} from 'reactstrap';


class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      displaySeeker: false,
      displayEmployer: false,
      show: false,
      setShow : false,
      error: false,
      success: false,
      
        fname:'',
        lname:'',
        email:'',
        city:'',
        zipcode:'',
        state:'',
        resumeURL:''
      
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  fnameChanged = (event) => {
    this.setState({
      fname: event.target.value
    });
  }

  lnameChanged = (event) => {
    this.setState({
      lname: event.target.value
    });
  }

  emailChanged = (event) => {
    this.setState({
      email: event.target.value
    });
  }


   cityChanged = (event) => {
    this.setState({
      city: event.target.value
    });
  }

  zipcodeChanged = (event) => {
    this.setState({
      zipcode: event.target.value
    });
  }

  stateChanged = (event) => {
    this.setState({
      state: event.target.value
    });
  }

  resumeURLChanged = (event) => {
    this.setState({
      resumeURL: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(event);
    
    
    fetch("/api/users/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({fname: this.state.fname, 
        lname: this.state.lname, 
        email: this.state.email, 
        city: this.state.city,
        zipcode: this.state.zipcode, 
        state: this.state.state, 
        resumeURL: this.state.resumeURL

      }),
    })
  
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }
  

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const data = new FormData(event.target);

  //   fetch ('/api/users', {
  //     method: 'POST',
  //     //body: data,
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({content: this.state.content}),
    

    

  //   });


  // }

  carousel = () => {
    return (
      <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="10000">
            <img src="https://setoncenter.org/wp-content/uploads/hands-2805248_1920-768x572.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-interval="2000">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  };

  seekerForm = (event) => {
    return (
      <div>

        <Modal show="true" onHide={(event) => this.setState({displaySeeker: false})}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Reentry! Enter your information below.</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        
          
          <Form onSubmit = {this.handleSubmit} >
        

      <FormGroup row>
      <Label htmlFor="fname" sm={2}>First Name</Label> 
      <Col sm={10}>
      <Input id="fname" value={this.state.fname} name = "fname" type="text" placeholder="Walter" onChange={this.fnameChanged}/> 
      </Col>
      </FormGroup>


      <FormGroup row>
      <Label htmlFor="lname" sm={2}>Last Name</Label>
           
      <Col sm={10}>
      <Input id="lname" value={this.state.lname} name = "lname" type="text" placeholder="White" onChange={this.lnameChanged}/>      </Col>
      </FormGroup>

      <FormGroup row>
      <Label htmlFor="email" sm={2}>Email</Label> 
      <Col sm={10}>
      <Input id="email" value={this.state.email} name = "email" type="text" placeholder="ww@hotmail.com" onChange={this.emailChanged}/> 
      </Col>
      </FormGroup>

      <FormGroup row>
      <Label htmlFor="city" sm={2}>City</Label> 
      <Col sm={10}>
      <Input id="city" value={this.state.city} name = "city" type="text" placeholder="Los Angeles" onChange={this.cityChanged}/> 
      </Col>
      </FormGroup>

      <FormGroup row>
      <Label htmlFor="state" sm={2}>State</Label> 
      <Col sm={10}>
      <Input id="state" value={this.state.state} name = "state" type="text" placeholder="CA" onChange={this.stateChanged}/> 
      </Col>
      </FormGroup>

      <FormGroup row>
      <Label htmlFor="zipcode" sm={2}>Zipcode</Label> 
      <Col sm={10}>
      <Input id="zipcode" value={this.state.zipcode} name = "zipcode" type="text" placeholder="90210" onChange={this.zipcodeChanged}/> 
      </Col>
      </FormGroup>

      <FormGroup row>
      <Label htmlFor="resumeURL" sm={2}>Resume URL</Label> 
      <Col sm={10}>
      <Input id="resumeURL" value={this.state.resumeURL} name = "resumeURL" type="text" placeholder="https://breakingbad.fandom.com/wiki/Walter_White" onChange={this.resumeURLChanged}/> 
      </Col>
      </FormGroup>

      <FormGroup row>
      <Label htmlFor="skill" sm={2}>Skills</Label> 
      <Col sm={10}>
      
            <Input type="checkbox" name="looking-for" value="GD" />
            Graphic Designer<br />
            <Input type="checkbox" name="looking-for" value="PA" />
            Painter<br />
            <Input type="checkbox" name="looking-for" value="EL" />
            Electrician<br />
            <Input type="checkbox" name="looking-for" value="CA" />
            Carpenter<br />
            <Input type="checkbox" name="looking-for" value="FS" />
            Food Servicer<br />
            <Input type="checkbox" name="looking-for" value="OT" />
            Other<br /> 
      </Col>
      </FormGroup>

{/*       
            <Label htmlFor="fname">First Name</Label> 
            <Input id="fname" value={this.state.fname} name = "fname" type="text" onChange={this.fnameChanged}/> 

            <label htmlFor="lname"> Enter last name</label>
            <input id="lname" value={this.state.lname} name = "lname" type="text" onChange={this.lnameChanged}/>

            <label htmlFor="email"> Enter your email</label>
            <input id="email" value={this.state.email} name = "email" type="email" onChange={this.emailChanged}/>

            <label htmlFor="city"> Enter city</label>
            <input id="city" value={this.state.city} name = "city" type="text" onChange={this.cityChanged}/>

            <label htmlFor="zipcode"> Enter zipcode</label>
            <input id="zipcode" value={this.state.zipcode} name = "zipcode" maxLength="5" minLength="5" type="text" onChange={this.zipcodeChanged}/>

            <label htmlFor="state"> Enter state</label>
            <input id="state" value={this.state.state} name = "state" maxLength="2" minLength="2" type="text" onChange={this.stateChanged}/>

            <label htmlFor="resumeURL"> Enter a link to your resume</label>
            <input id="resumeURL" value={this.state.resumeURL} name = "resumeURL" type="text" onChange={this.resumeURLChanged}/> */}

            <Button color="primary" type="submit" >Submit!</Button>

            {/* onClick={(event) => this.setState({displaySeeker: false})} */}
          </Form>

          </Modal.Body>
          <Modal.Footer>
            Please Note: The only personal information prospective employers will see is your first name and location. Please make sure your resume does not include any information you do not want to be shared.
          </Modal.Footer>
          
          
          
          {
          
          /* <Modal.Header closeButton>
            <Modal.Title>Let's Get Started!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            First Name<br />
            <input type="text" placeholder="John" required />
            Last Name<br />
            <input type="text" placeholder="Doe" required />
            Email Address<br />
            <input type="text" placeholder="jdoe@example.com" required />
            City<br />
            <input type="text" placeholder="Buffalo" />
            State<br />
            <input type="text" placeholder="New York" required />
            Zip Code<br />
            <input type="text" placeholder="10450" required />
            Experience (select as many as apply)<br />
            <input type="checkbox" name="looking-for" value="GD" />
            Graphic Designer<br />
            <input type="checkbox" name="looking-for" value="PA" />
            Painter<br />
            <input type="checkbox" name="looking-for" value="EL" />
            Electrician<br />
            <input type="checkbox" name="looking-for" value="CA" />
            Carpenter<br />
            <input type="checkbox" name="looking-for" value="FS" />
            Food Servicer<br />
            <input type="checkbox" name="looking-for" value="OT" />
            Other<br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={(event) => this.setState({displaySeeker: false})}>
              Close
           </Button>
            <Button variant="primary" onClick={(event) => this.setState({displaySeeker: false})}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
  employerForm = () => {
  return (
    <div>
      <Modal show="true" onHide={(event) => this.setState({displayEmployer: false})}>




        <Modal.Header closeButton>
          <Modal.Title>Welcome Aboard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          First Name<br />
          <input type="text" placeholder="John" required />
          Last Name<br />
          <input type="text" placeholder="Doe" required />
          Email Address<br />
          <input type="text" placeholder="jdoe@example.com" required />
          Business Name<br />
          <input type="text" placeholder="Reentry Org" required />
          City<br />
          <input type="text" placeholder="Buffalo" />
          State<br />
          <input type="text" placeholder="New York" required />
          Zip Code<br />
          <input type="text" placeholder="10450" required />
          Looking For (select as many as apply)<br />
          <input type="checkbox" name="looking-for" value="GD" />
          Graphic Designer<br />
          <input type="checkbox" name="looking-for" value="PA" />
          Painter<br />
          <input type="checkbox" name="looking-for" value="EL" />
          Electrician<br />
          <input type="checkbox" name="looking-for" value="CA" />
          Carpenter<br />
          <input type="checkbox" name="looking-for" value="FS" />
          Food Servicer<br />
          <input type="checkbox" name="looking-for" value="OT" />
          Other<br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(event) => this.setState({displayEmployer: false})}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => this.setState({displayEmployer: false})}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  };
  render() {
    const {displaySeeker} = this.state;
    const {displayEmployer} = this.state;
    const {carousel} = this.state;
    return (
      <div>
        <div>The First Step is Reentry</div>
        {carousel}
        <button type="button"className="" onClick={(event) => this.setState({displaySeeker: true})}>Seeker</button>
        {displaySeeker && this.seekerForm()}
        <button type="button"className="" onClick={(event) => this.setState({displayEmployer: true})}>Employers</button>
        {displayEmployer && this.employerForm()}
      </div>
    );
  }
}


export default HomePage;


function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}