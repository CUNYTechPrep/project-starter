import React from 'react'
import Map from '../components/SchoolMap'
const HighSchoolInfo = ({data}) => {
    return (
        <div>
            <p>{data.school_name}</p>
            <Map data={data} name={data.school_name}/>
        </div>
    )
}
//
export default HighSchoolInfo
