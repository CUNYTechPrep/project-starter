// import React, { useState } from "react"
// import "./ProfilePage.css"
// import Select from "react-select"
// import Loading from "../components/Loading"
// import axios from "axios"

const schools = [
    { value: "Baruch College", label: "Baruch College" },
    { value: "Queens College", label: "Queens College" },
    { value: "Brooklyn College", label: "Brooklyn College" },
    { value: "csi", label: "College of Staten Island" },
    { value: "johnJay", label: "John Jay College of Criminal Justice" },
    { value: "lehman", label: "Lehman College" },
    { value: "hunter", label: "Hunter College" },
    { value: "medgar", label: "Medgar Evers College" },
    { value: "cityTech", label: "New York City College of Technology" },
    { value: "city", label: "The City College of New York" },
    { value: "york", label: "York College" },
]

const year = [
    { value: 2020, label: "2020" },
    { value: 2021, label: "2021" },
    { value: 2022, label: "2022" },
    { value: 2023, label: "2023" },
    { value: 2024, label: "2024" },
]

const interest = [
    { value: "Sport", label: "Sport" },
    { value: "Gaming", label: "Gaming" },
    { value: "Cooking", label: "Cooking" },
    { value: "Hiking", label: "Hiking" },
    { value: "Basketball", label: "Basketball" },
    { value: "Anime", label: "Anime" },
    { value: "Football", label: "Football" },
    { value: "Yoga", label: "Yoga" },
    { value: "Soccer", label: "Soccer" },
    { value: "Reading", label: "Reading" },
    { value: "Painting", label: "Painting" },
    { value: "Writing", label: "Writing" },
    { value: "Baking", label: "Baking" },
    { value: "Running", label: "Running" },
]

// class allCourses extends React.Component {
//     // get profile from http://localhost:8080/api/profile

//     state = {
//         loading: true,
//         courses: null,
//         notFound: false,
//     }

//     async componentDidMount() {
//         const courses = (await axios.get("/api/all-courses")).data
//         this.setState({ courses, loading: false })
//     }


//     render() {
//         if (this.state.loading) return <Loading />
//         return(this.state.courses)
//     }
// }

export { schools, year, interest }
