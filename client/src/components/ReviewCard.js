import React from 'react';
import Rating from '@material-ui/lab/Rating';
import '../styles/reviewCard.css';

function ReviewCard ({reviews}) {
    return(
        <div className=" mx-auto review-size">
            {
              reviews.length>0 ? reviews.map((data) => {
                return(
                  <div className="card mb-4 card-setting mx-auto">
                    <h5 className="card-header">{data.schoolName}</h5>
                    <div className="card-body">
                    <h5 className="card-title">{data.reviewerEmail}</h5>
                    <p className="card-text">{data.description}</p>
                    <Rating
                        name="simple-controlled"
                        value={data.rating}
                        readOnly
                    />
                    </div>
                  </div>
                )
              })
              :
              <div className="card mb-4 card-setting mx-auto">
                    <div className="card-body">
                      <p className="card-text">No Reviews</p>
                    </div>
              </div>
            }
        </div>
    );
} 

export default ReviewCard;