import React, {useState, useEffect, props} from "react";
import { Container} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import Rating from 'react-simple-star-rating';
import ReviewCard from "../components/ReviewCard";

export default function Profile() {
  const [userReviewData, setUserReviewData] = useState();
  const [rating, setRating] = useState(null); 
  const { currentUser } = useAuth();

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

  // Review card display by User

  function UserReviewCard ({reviews}) {
    
    return(
        <div className="container">
            {
              reviews ? reviews.map((data) => {
                return(
                  <div className="card">
                    <h5 className="card-header">{data.schoolName}</h5>
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
        <h2>Profile Page</h2>
        <div className="text-center mt-2">
          <strong>Email:{currentUser.email}</strong>
        </div>
      </Container>
      <ReviewCard reviews={userReviewData}/>  
    </div>
  );
}
