import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, CardGroup, CardLink, Row, Col
  } from 'reactstrap';

function Candidate({ fname, email, city, state, zipcode, resumeURL, isBiz }) {
  return (
   <div>

<CardDeck>
<Row sm="2">
      <Col sm="10">
       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
       
           <CardBody>
               <CardTitle>
                   Meet {fname}!
               </CardTitle>
               <CardText>
                  {fname} is from {city}, {state} in {zipcode}.
               </CardText>
               <CardText>
                   {fname} is currently open to new job opportunities. 
                   
               </CardText>
               <CardText>
               His/her resume can be found here: {resumeURL}.
               </CardText>
           </CardBody>
           <Button color="primary">Message {fname}</Button>
       </Card>
    </Col>
    </Row>
       </CardDeck>
       <CardDeck></CardDeck> 

     
    </div>
  );
}

export default Candidate;