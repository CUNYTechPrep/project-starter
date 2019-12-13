import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, CardGroup, CardLink
  } from 'reactstrap';

  

function Candidate({ fname, email, city, zipcode, state, resumeURL, isBiz }) {
  return (
   <div>

<CardDeck>
       <Card >
           <CardBody>
               <CardTitle>
                   Meet {fname}!
               </CardTitle>
               <CardText>
                   I'm from {city}, {state} {zipcode}.

               </CardText>
               <CardText>
               My resume can be found here: {resumeURL}.
               </CardText>
           </CardBody>
           <Button>Message {fname}</Button>

       </Card>
       </CardDeck>
       <CardDeck></CardDeck> 

     
    </div>
  );
}

export default Candidate;