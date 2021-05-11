import React from 'react';
import Map from '../components/SchoolMap';
import ReviewCard from "../components/ReviewCard";

const HighSchoolInfo = ({data, userReviewData}) => {
    const school_website = "http://" + data.website;

    return (
        <div>
            <h1 className="text-center">{data.school_name}</h1>
            <div className="row">
                <div class="card col-4">
                    <div class="card-body col-8">
                        <h3 class="card-title">General</h3>
                        <p class="card-text">Grades: {data.finalgrades}</p>
                        <p class="card-text">Total Students: {data.total_students}</p>
                        <p class="card-text">Time: {data.start_time} - {data.end_time}</p>
                        <p>Accessibility: {data.school_accessibility}</p>
                    </div>
                </div>
                
                <div class="card col-4">
                    <div class="card-body col-8">
                        <h3 class="card-title">Location</h3>
                        <h6 class="card-subtitle mb-2">Borough: {data.borough}</h6>
                        <p class="card-text">{data.location.split('(')[0]}</p>
                        <h6 class="card-subtitle mb-2">Transportation</h6>
                        <p class="card-text">Subway: {data.subway}</p>
                        <p class="card-text">Bus: {data.bus}</p>
                    </div>
                </div>
                <div class="card col-4">
                    <div class="card-body col-8">
                        <h3 class="card-title">Contact</h3>
                        <p class="card-text">Phone: {data.phone_number}</p>
                        <p class="card-text">Email: {data.school_email}</p>
                        <a href={`http://${data.website}`} target="_blank">{data.website}</a>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-body col-8">
                    <h3 class="card-title">Overview</h3>
                    <p class="card-text">{data.overview_paragraph}</p>
                </div>
            </div>
            <div className="row">
                <div class="card col-6">
                    <div class="card-body col-8">
                        <h3 class="card-title">Academics</h3>
                        <h6 class="card-subtitle mb-2">Advance Placement (AP) Courses:</h6>
                        <p class="card-text">{data.advancedplacement_courses}</p>
                        <h6 class="card-subtitle mb-2">Language Courses:</h6>
                        <p class="card-text">{data.language_classes}</p>
                        <h6 class="card-subtitle mb-2">Diploma Endorsement:</h6>
                        <p class="card-text">{data.diplomaendorsements}</p>
                    </div>
                </div>
                <div class="card col-6">
                    <div class="card-body col-8">
                        <h3 class="card-title">Activties</h3>
                        <h6 class="card-subtitle mb-2">PSAL Sports - COED:</h6>
                        <p class="card-text">{data.psal_sports_coed}</p>
                        <h6 class="card-subtitle mb-2">PSAL Sports - BOYS:</h6>
                        <p class="card-text">{data.psal_sports_boys}</p>
                        <h6 class="card-subtitle mb-2">PSAL Sports - GIRLS:</h6>
                        <p class="card-text">{data.psal_sports_girls}</p>
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

export default HighSchoolInfo
