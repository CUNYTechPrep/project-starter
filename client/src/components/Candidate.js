import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
<<<<<<< Updated upstream
    CardSubtitle, CardBody
=======
    CardSubtitle, CardBody, CardGroup, CardLink, Row, Col
>>>>>>> Stashed changes
  } from 'reactstrap';

function Candidate({ fname, email, city, zipcode, resumeURL, isBiz }) {
  return (
   <div>
<<<<<<< Updated upstream
       <Card>
=======

<CardDeck>
<Row sm="10">
      <Col sm="10">
       <Card >
       
>>>>>>> Stashed changes
           <CardBody>
               <CardTitle>
                   Candidate {fname}
               </CardTitle>
               <CardText>
                   <ul>
                       <li>City: {city}</li>
                       <li>Zip Code: {zipcode}</li>
                       <li>Resume: {resumeURL}</li>
                   </ul>
               </CardText>
           </CardBody>
<<<<<<< Updated upstream
       </Card>
=======
           <Button>Message {fname}</Button>
       </Card>
    </Col>
    </Row>
       </CardDeck>
       <CardDeck></CardDeck> 

     
>>>>>>> Stashed changes
    </div>
  );
}

export default Candidate;