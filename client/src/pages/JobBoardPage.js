import React from 'react';
import { Redirect } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Job = (props) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="{props.picture}" alt/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.company}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted {props.date}</small>
        </Card.Footer>
      </Card>
    </div>
    );
}

const NoResults = () => {
  return (
    <div>
      <br />
      <Jumbotron>
        <h1>Oops</h1>
        <p>
          Hey there's no results right now but check in later!
        </p>
        <br />
        <p>
          <Button href="https://www.google.com/?client=safari" variant="primary">In The Meantime Look Here To Get Prapared</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

class JobBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      jobs : [],
      userID : 0,
    };
    this.showJobs();
  }

  showJobs = () => {
    fetch('/api/jobs').
      then((response) => {
        if(response.ok) {
          return response.json();
        } else 
          return [];
        }).then((jsonresponse) => {
          this.setState({jobs: jsonresponse});
        })   
  }

  render() {
    let noResults = <NoResults />
    let jobElems = this.state.jobs.map(job => {
      return (
        <Job
        title={job.title}
        company={job.company}
        date={job.createdAt}
        />
      );
    })

    return (
      <div>
      {this.state.jobs.length > 0 ? {jobElems} : <CardDeck> {noResults} </CardDeck> }
      </div>
    );
  }
}

export default JobBoard;


























