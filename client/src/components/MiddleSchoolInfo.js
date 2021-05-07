import React from 'react'
import Map from '../components/SchoolMap'
const MiddleSchoolInfo = ({data}) => {
    return (
        <div>
            <p>{data.name}</p>
            <Map data={data} name={data.name}/>
        </div>
    )
}

export default MiddleSchoolInfo
