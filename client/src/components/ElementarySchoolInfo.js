import React from 'react'
import Map from '../components/SchoolMap';
import ReviewCard from "../components/ReviewCard";

const ElementarySchoolInfo = ({data, userReviewData}) => {
    console.log("elementary school: ", data);
    return (
        <div>
            <h1 className="text-center">{data.school_name}</h1>
            <div className="row shadow p-3 mb-5 bg-white rounded">
                <div class="card col-4 ">
                    <div class="card-body dark-purple">
                        <h3 class="card-title">General</h3>
                        <p class="card-text">Grades: {data.grades}</p>
                        <p class="card-text">Accessibility: {data.accessibility}</p>
                        <p class="card-text">School Type: {data.school_type}</p>
                    </div>
                </div>

                <div class="card col-4">
                    <div class="card-body dark-purple">
                        <h3 class="card-title">Location</h3>
                        <h6 class="card-subtitle mb-2">Borough: {data.borough}</h6>
                        <p class="card-text">Address: {data.address}, {data.borough.charAt(0) + data.borough.slice(1).toLowerCase()} NY {data.postcode}</p>    
                    </div>
                </div>

                <div class="card col-4 ">
                    <div class="card-body dark-purple">
                        <h3 class="card-title">Contact</h3>
                        <p class="card-text">Phone: {data.phone}</p>
                    </div>
                </div>
            </div>
            <div class="card shadow p-3 mb-5 bg-white rounded">
                <div class="card-body col-12 ">
                    <div class="card-body">
              
                        <h3 class="card-title text-center">Academics</h3>
                        <div class = "col-8">
                            <h6 class="card-subtitle mb-2">Dual Language:</h6>
                            <p class="card-text">{data.dual_language? data.dual_language : "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body justify-content-center mx-auto col-8">
                    <h3 class="card-title text-center">Reviews</h3>  
                    <ReviewCard reviews={userReviewData}/>
                </div>
            </div>
            <Map data={data} name={data.school_name}/>
            
        </div>
    )
}

export default ElementarySchoolInfo
