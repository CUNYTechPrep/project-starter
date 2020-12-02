// import React, { useState } from "react"
import React, { useState, useEffect } from "react"
import "./ProfilePage.css"
import Select from "react-select"
import { schools, years, interests, majors, minors } from "../components/SchoolYearData"
import { useForm, Controller } from "react-hook-form"
import auth from "../services/auth"
import Loading from "../components/Loading"
// import courses from "../services/courses"
import { Redirect } from "react-router-dom"
import axios from "axios"

export default function ProfileEditPage() {
    const [profileEdited, setProfileEdited] = useState(false)

    const { register, control, handleSubmit, errors } = useForm()

    const [allcourses, setCourses] = useState(null)

    const onSubmit = async data => {
        data = {
            ...data,
            classes: data.classes?.map(c => c.value) || [],
            major: data.major.value,
            school: data.school.value,
            year: data.year.value,
        }

        console.log(data)
        const response = await axios.post("/api/profile", data)
        setProfileEdited(true)
    }

    useEffect(() => {
        if (!auth.profile) return

        let isMounted = true // note this flag denote mount status
        const fetchData = async () => {
            const resp = await axios.get("/api/all-courses")
            // console.log(resp.data);
            // setCourses(resp.data['courses']);
            return resp.data.courses
        }

        fetchData().then(data => {
            if (isMounted) {
                setCourses(data)
            }
        })
        return () => {
            isMounted = false
        } // use effect cleanup to set flag false, if unmounted
    }, [])

    if (profileEdited || !auth.profile) return <Redirect to="profile" />

    if (allcourses === null) return <Loading />

    const profile = auth.profile
    return (
        <div className="profile">
            <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                <div className="two fields">
                    <div className="field">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            defaultValue={profile.firstName}
                            ref={register}
                        />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            defaultValue={profile.lastName}
                            ref={register}
                        />
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>School</label>
                        <Controller
                            name="school"
                            as={Select}
                            options={schools}
                            control={control}
                            defaultValue={schools.find(school => school.label === profile.school)}
                        />
                    </div>
                    <div className="field">
                        <label>Year</label>
                        <Controller
                            name="year"
                            options={years}
                            as={Select}
                            control={control}
                            defaultValue={years.find(year => year.value == profile.graduate_date)}
                        />
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>Major</label>
                        <Controller
                            name="major"
                            as={Select}
                            options={majors}
                            control={control}
                            defaultValue={majors.find(major => major.value === profile.major)}
                        />
                    </div>
                    <div className="field">
                        <label>Minor</label>
                        <Controller name="minors" options={minors} as={Select} control={control} />
                    </div>
                </div>
                <div className="field">
                    <label>Classes</label>
                    <Controller
                        as={Select}
                        isMulti
                        name="classes"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        options={allcourses}
                        control={control}
                        defaultValue={profile.coursesTaken.map(course => ({
                            label: course.label,
                            value: course.classCode,
                        }))}
                    />
                </div>
                <div className="field">
                    <label>Interest</label>
                    <Controller
                        as={Select}
                        isMulti
                        name="interest"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        options={interests}
                        control={control}
                    />
                </div>
                <div className="field">
                    <label>Bio</label>
                    <textarea
                        spellCheck="false"
                        name="bio"
                        ref={register}
                        defaultValue={profile.bio}
                    ></textarea>
                </div>

                <button type="submit" className="positive ui button">
                    Edit Profile
                </button>
            </form>
        </div>
    )
}
