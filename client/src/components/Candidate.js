import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

function Candidate({ fname, email, city, zipcode, resumeURL, isBiz }) {
  return (
   <div>
       <Card>
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
       </Card>
    </div>
  );
}

export default Candidate;