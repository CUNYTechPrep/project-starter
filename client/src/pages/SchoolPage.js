import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loading from '../components/Loading';
import HighSchoolInfo from '../components/HighSchoolInfo'
import MiddleSchoolInfo from '../components/MiddleSchoolInfo'
import ElementarySchoolInfo from '../components/ElementarySchoolInfo'
const SchoolPage = () => {
    let {school_dbn} = useParams();
    const [highSchoolData, setHighSchoolData] = useState();
    const [middleSchoolData, setMiddleSchoolData] = useState();
    const [elementarySchoolData, setElementarySchoolData] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const options ={
            type: "GET",
            data: {
                "$limit" : 5000,
                "$$app_token" : "YOURAPPTOKENHERE"
            }
        };
        
        //https://data.cityofnewyork.us/resource/qpj9-6qjn.json?dbn=01M292
        
        // note that not found is shown until school is found (change it to timer based loading)

        // highschool fetch 
        //EX: 01M448, 02M135, 02M296, 24Q610
        // If this can't fetch the highschool, then it'll remain null and fetch through middle/elementary school
        fetch(`https://data.cityofnewyork.us/resource/qpj9-6qjn.json?dbn=${school_dbn}`, options)
            .then(res => res.json())
            .then(data => {
                setHighSchoolData(data[0]);
                setLoading(false)
            } )
            .catch(e=> {console.log(e);})

        // middle school fetch
        //EX:01M034,  01M332, 02M126
        fetch(`https://data.cityofnewyork.us/resource/f6s7-vytj.json?schooldbn=${school_dbn}`, options)
            .then(res => res.json())
            .then(data => {
                setMiddleSchoolData(data[0]);
                setLoading(false)
            } )
            .catch(e=> {console.log(e);})

            
        // elementary school fetch
        //EX:01M015,  32K376, 11X169
        fetch(`https://data.cityofnewyork.us/resource/e7es-jx5j.json?dbn=${school_dbn}`, options)
            .then(res => res.json())
            .then(data => {
                setElementarySchoolData(data[0]);
                setLoading(false)
            } )
            .catch(e=> {console.log(e);})
        
    }, [])
    console.log(highSchoolData)
    return (
        loading ? <Loading /> :
        <div>
            { highSchoolData &&
                <HighSchoolInfo data={highSchoolData}/>
            }
            {
                middleSchoolData && 
                <MiddleSchoolInfo data={middleSchoolData}/>
            }
            {
                elementarySchoolData && 
                <ElementarySchoolInfo data={elementarySchoolData}/>    
            }
            {
                /* !highSchoolData && !middleSchoolData && !elementarySchoolData &&
                <div>
                    <p>School Not Found</p>
                </div> */
            }
        </div>
    )
}

export default SchoolPage
