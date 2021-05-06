import React, {useState, useEffect} from 'react'
import { Container } from "react-bootstrap";
import "../styles/homePage.css";
import CompareForm from '../components/CompareForm'

export default function Compare() {
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
            setLoading(false)
          })
          .catch(err => console.log("API ERROR: ", err));
          // fetch for all of user's review
        

      }, [])

    return (
        <div>
            <Container className="w-100" style={{ minHeight: "85vh", maxWidth: "700px", marginTop: "60px"}}>
            
                <div className="text-center mt-2">
                    <h2>Compare Schools</h2>
                </div>
                <div className="">
                    <CompareForm items={items} compItems={compItems}/>
                </div>
                <div className="text-center" style={{marginTop: "20px"}}>
                  <button type="submit" className="btn btn-primary btn-lg" style={{borderRadius:"40px", fontSize:"20x"}}>Compare</button>
                </div>

            </Container>
        </div>
    )
}
