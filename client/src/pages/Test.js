import React, {useState, useEffect, props} from "react";

import { Container} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import Rating from 'react-simple-star-rating';
import Card from '../components/SchoolCard';
import '../styles/theme.css';
import {Tabs, Tab} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Alert} from "react-bootstrap";


export default function Test() {
  const [userReviewData, setUserReviewData] = useState();
  const [rating, setRating] = useState(null); 
  const { currentUser } = useAuth();
  const [key, setKey] = useState('bookmark'); 
  
  useEffect(() => {
    fetch('http://localhost:8080/api/review/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({reviewerUUID: currentUser.uid}),
        })
        .then(response => response.json())
        .then(data => {
            setUserReviewData(data)
            console.log(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
  }, [])
  
  //delete post 
  const deleteReview = ({data})=>{
    
        let schoolDBID = data.schoolDBID;
        
        fetch('http://localhost:8080/api/review/deleteReview', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({reviewerUUID: currentUser.uid, schoolDBID: data.schoolDBID},
                    ),
            })
            .then( response => {
                if(response.ok){
                    alert("Review has been deleted")
                }else{
                    console.log("Not successful")
                }
            })
            
            .catch((error) => {
                console.error('Error:', error);
            });

        
    
    
  }
  //testing 
  function EditReview({data}){
      return(
          <span class= "float-right">
              <Button  onClick ={(e) => deleteReview({data})}>Delete</Button>
          </span>
      )
  }
  // Review card display by User

  function UserReviewCard ({reviews}) {
    
    return(
        <div className="container">
            {
              reviews ? reviews.map((data) => {
                return(
                  <div className="card">
                    <h5 className="card-header">
                        {data.schoolName}
                        <EditReview data = {data}/>
                    
                    </h5>
                   
                    <div className="card-body">
                      <h5 className="card-title">{data.reviewerEmail}</h5>
                      <p className="card-text">{data.description}</p>
                      <Rating
                        ratingValue={data.rating}
                        size={20}
                        fillColor='orange'
                        emptyColor='gray'
                    />
                    </div>
                  </div>
                )
                
              })
              :
              <p>No Review Data.</p>
            }
        </div>
    );
  } 

  return (
    <div>
      <Container>
        <h2>Test Page</h2>
        <div className="text-center mt-2">
          <strong>Email:{currentUser.email}</strong>
        </div>
      </Container>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="bookmark" title="Bookmark">
        <h1>Bookmark</h1>
      </Tab>
      <Tab eventKey="review" title="Review">
        <UserReviewCard reviews={userReviewData}/>
        
      </Tab>
    </Tabs>
      
         
      
    </div>
  );
}
