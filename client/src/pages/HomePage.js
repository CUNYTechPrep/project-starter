import React from 'react';
import { Redirect } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

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
            <img src="..." class="d-block w-100" alt="..." />
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
          
          <form onSubmit = {this.handleSubmit} >
            <label htmlFor="fname"> Enter first name</label>
            <input id="fname" value={this.state.fname} name = "fname" type="text" onChange={this.fnameChanged}/>

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
            <input id="resumeURL" value={this.state.resumeURL} name = "resumeURL" type="text" onChange={this.resumeURLChanged}/>

            <button variant="primary" type="submit" >Submit!</button>

            {/* onClick={(event) => this.setState({displaySeeker: false})} */}
          </form>
          
          
          
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




        {/* <Modal.Header closeButton>
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
        </Modal.Footer> */}
      </Modal>
    </div>
    );
  };
  render() {
    const {displaySeeker} = this.state;
    const {displayEmployer} = this.state;
    // const {carousel} = this.state;
    return (
      <div>
        <div>The First Step is Reentry</div>
        {/* {carousel} */}
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