// import React, { useState } from "react"
// import "./ProfilePage.css"
// import Select from "react-select"
// import Loading from "../components/Loading"
// import axios from "axios"

const schools = [
    { value: "Baruch College", label: "Baruch College" },
    { value: "Queens College", label: "Queens College" },
    { value: "Brooklyn College", label: "Brooklyn College" },
    { value: "College of Staten Island", label: "College of Staten Island" },
    {
        value: "John Jay College of Criminal Justice",
        label: "John Jay College of Criminal Justice",
    },
    { value: "Lehman College", label: "Lehman College" },
    { value: "Hunter College", label: "Hunter College" },
    { value: "Medgar Evers College", label: "Medgar Evers College" },
    { value: "New York City College of Technology", label: "New York City College of Technology" },
    { value: "The City College of New York", label: "The City College of New York" },
    { value: "York College", label: "York College" },
]

const years = [
    { value: 2020, label: "2020" },
    { value: 2021, label: "2021" },
    { value: 2022, label: "2022" },
    { value: 2023, label: "2023" },
    { value: 2024, label: "2024" },
]

const interests = [
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

const majors = [
    { value: "Computer Science", label: "Computer Science" },
    { value: "Accounting", label: "Accounting" },
    { value: "Physics", label: "Physics" },
]

const minors = [
    { value: "Math", label: "Math" },
    { value: "Accounting", label: "Accounting" },
    { value: "Physics", label: "Physics" },
]

const goals =[
    { value: "Study Buddy", label: "Study Buddy" },
    { value: "Mentoring", label: "Mentoring" },
    { value: "Provide Tutoring", label: "Provide Tutoring" },
    { value: "Need Tutors", label: "Need Tutors" },
    { value: "Gaming Buddy", label: "Gaming Buddy" },
    { value: "Work on a startup", label: "Work on a startup" },
    { value: "Virtual Hookup", label: "Virtual Hookup" },
]

export { schools, years, interests, majors, minors, goals }
