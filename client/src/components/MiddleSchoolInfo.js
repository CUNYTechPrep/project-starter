import React from 'react'
import Map from '../components/SchoolMap'
const MiddleSchoolInfo = ({data}) => {
    console.log("middle school data: ", data);
    return (
        <div>
            <h1 className="text-center">{data.name}</h1>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">Grades: {data.gradespan}</p>
                    <p className="card-text">Total Students: {data.totalstudents}</p>
                    <p className="card-text">Time: {data.start_time} - {data.end_time}</p>
                    <p>Accessibility: {data.accessibility_description}</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Contact</h3>
                    <p className="card-text">Phone: {data.telephone}</p>
                    <a href={`http://${data.independentwebsite}`} target="_blank">{data.independentwebsite}</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Location</h3>
                    <h6 className="card-subtitle mb-2">Borough: {data.borough}</h6>
                    <p className="card-text">Address: {data.address}</p>
                    <h6 className="card-subtitle mb-2">Transportation: </h6>
                    <p className="card-text">Subway: {data.subway}</p>
                    <p className="card-text">Bus: {data.bus}</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Overview</h3>
                    <p className="card-text">{data.overview}</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Adcademics</h3>
                    <h6 className="card-subtitle mb-2">Elective Courses:</h6>
                    <p className="card-text">{data.electiveclassNamees}</p>
                    <h6 className="card-subtitle mb-2">Language Courses:</h6>
                    <p className="card-text">{data.languageclassNamees}</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Activties</h3>
                    <h6 className="card-subtitle mb-2">Extracurricular: </h6>
                    <p className="card-text">{data.activities_description}</p>
                    <h6 className="card-subtitle mb-2">Sports: </h6>
                    <p className="card-text">{data.othersports}</p>
                </div>
            </div>
            <Map data={data} name={data.name}/>
        </div>
    )
}

export default MiddleSchoolInfo
