import React from 'react'
import { Container } from "react-bootstrap";
import "../styles/homePage.css";
import CompareForm from '../components/CompareForm'

export default function Compare() {
    
    return (
        <div>
            <Container className="w-100" style={{ minHeight: "85vh", maxWidth: "700px", marginTop: "60px"}}>
            
                <div className="text-center mt-2">
                    <h2>Compare Schools</h2>
                </div>
                <div>
                    <CompareForm />
                </div>
                <div className="text-center" style={{marginTop: "20px"}}>
                  <button type="submit" className="btn btn-primary btn-lg" style={{borderRadius:"40px", fontSize:"20x"}}>Compare</button>
                </div>

            </Container>
        </div>
    )
}
