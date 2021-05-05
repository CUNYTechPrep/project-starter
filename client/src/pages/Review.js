import React, {useState, useEffect} from 'react';
import Rating from 'react-simple-star-rating';
import { useAuth } from "../contexts/AuthContext";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {Alert} from 'react-bootstrap'

export default function Review() {
    const [rating, setRating] = useState(null); // initial rating value
    const { currentUser } = useAuth();
    const [schoolNameError, setSchoolNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [ratingError, setRatingError] = useState('')
    const [schoolJSON, setJSON] = useState(null);
    const [loading, setLoading] = useState(true);
    const [items, setItems ]= useState([]);
    const [compItems, setCompItems] = useState([]);
    useEffect(() => {
        const options ={
          type: "GET",
          data: {
            "$limit" : 5000,
            "$$app_token" : "YOURAPPTOKENHEREs"
          }
        };
        fetch("https://data.cityofnewyork.us/resource/qpj9-6qjn.json", options)
          .then(res => res.json())
          .then(data => {
            let tempItems = []
            let tempComp = []
            let index = 0
            data.forEach((e)=> {
              tempItems.push({
                id: index++,
                dbn: e.dbn,
                school_name: e.school_name,
              })
              tempComp[e.school_name] = e.dbn
    
            }
            )
            setItems(tempItems)
            setCompItems(tempComp)
            setJSON(data)
            setLoading(false)
          })
          .catch(err => console.log("API ERROR: ", err));
    
      }, [])

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }

    const submission = (e) => {
        e.preventDefault()
        e.persist();
        console.log(e);
        let noErrors = true
        if(e.target[0].defaultValue in compItems === false){
            e.preventDefault()
            noErrors = false
            setSchoolNameError('Please type in the correct school name.');
        }
        else{
            setSchoolNameError('');
        }

        if(e.target[1].value === ""){
            e.preventDefault()
            noErrors = false
            setDescriptionError("Please fill in your description.");
        }
        else{
            setDescriptionError('');
        }
        if(rating === null){
            e.preventDefault()
            noErrors = false
            setRatingError('Please provide a rating.');
        }
        else{
            setRatingError('');
        }

        if (noErrors === false){
            return
        }
        //Remember to change reviewerName to reviewerEmail
        const data = { 
            reviewewUUID: currentUser.uid,
            reviewerName: currentUser.email,
            schoolDBID: compItems[e.target[0].defaultValue],
            description: e.target[1].value,
            rating: rating,
        }
        //console.log("data: " + JSON.stringify(data))
        //Change according to deployed backend after we deploy
        fetch('http://localhost:8080/api/review/addReview', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
       
    }

    const styles = {
        zIndex: "1"
    }
    
    const handleOnSearch = (string, results) => {
      // onSearch will have as the first callback parameter
      // the string searched and for the second the results.
      console.log('OnSearch', string, results)
    }
  
    const handleOnSelect = (item) => {
      // the item selected
      console.log('OnSelect',item)
    }
  
    const handleOnFocus = () => {
      console.log('Focused')
    }
  
    return (
        <div className="col-3 text-center m-auto">
            <h1>Submit a Review</h1>
            <form className="input-large" onSubmit={ (e) => submission(e) }>
                <div className="form-group inputSetting">
                    <ReactSearchAutocomplete 
                        items={items}
                        onSearch={handleOnSearch}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        fuseOptions={{ keys:["school_name"] }}
                        resultStringKeyName= "school_name"
                        styling ={styles}
                        placeholder="Search School Name"
                        autoFocus
                    />
                </div>
                {schoolNameError && <Alert className=" mt-2 mb-auto" variant="danger">{schoolNameError}</Alert>}
                <div className="form-group">
                    <label for="description">Description</label>
                    <textarea className="form-control" id="description" rows="10"></textarea>
                </div>
                {descriptionError && <Alert className=" mt-2 mb-auto" variant="danger">{descriptionError}</Alert>}
                <div className="form-group">
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
                {ratingError && <Alert className=" mt-2 mb-auto" variant="danger">{ratingError}</Alert>}
                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </form>            
            
        </div>
    );
}