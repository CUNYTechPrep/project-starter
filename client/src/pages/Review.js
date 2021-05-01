import React, {useState} from 'react';
import Rating from 'react-simple-star-rating';
import { useAuth } from "../contexts/AuthContext";

export default function Review() {
    const [rating, setRating] = useState(0); // initial rating value
    const { currentUser } = useAuth();
    
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }

    const submission = (e) => {
        e.persist();
        console.log(e);
        e.preventDefault();
    }

    return (
        <div className="col-3">
            <h1>Submit a Review</h1>
            <form className="input-large" onSubmit={ (e) => submission(e) }>
                <div class="form-group">
                    <label for="schoolName">School Name</label>
                    <select class="form-control" id="schoolName">
                        <option>School 1</option>
                        <option>School 2</option>
                        <option>School 3</option>
                        <option>School 4</option>
                        <option>School 5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" rows="10"></textarea>
                </div>
                <div class="form-group">
                    <p>Rating</p>
                    <Rating
                        onClick={handleRating}
                        ratingValue={rating}
                        size={20}
                        transition
                        fillColor='orange'
                        emptyColor='gray'
                    />
                </div>
                <button type="submit" class="btn btn-primary btn-lg">Submit</button>
            </form>            
        </div>
    );
}