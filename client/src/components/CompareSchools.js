import React from 'react';
import CompareElementary from "../components/CompareElementary";
import CompareMiddle from "../components/CompareMiddle";
import CompareHighschool from "../components/CompareHighschool";

export default function CompareSchools({schoolGrade, schoolOne, schoolTwo}){
    return (
        <div>
            {schoolGrade === "elementary" && <CompareElementary schoolOne={schoolOne} schoolTwo={schoolTwo}/>}
            {schoolGrade === "middle" && <CompareMiddle schoolOne={schoolOne} schoolTwo={schoolTwo}/>}
            {schoolGrade === "highschool" && <CompareHighschool schoolOne={schoolOne} schoolTwo={schoolTwo}/>}
        </div>
    )
}