// import React, { useState } from "react"
import React, { useState, useEffect } from "react"
import "./ProfilePage.css"
import Select, { createFilter } from "react-select"
import { VariableSizeList as List } from "react-window"
import { schools, years, interests, majors, minors, goals } from "../components/SchoolYearData"
import { useForm, Controller } from "react-hook-form"
import auth from "../services/auth"
import Loading from "../components/Loading"
// import courses from "../services/courses"
import { Redirect } from "react-router-dom"
import axios from "axios"
import SingleDropdown from "../components/SingleDropDown"

export default function ProfileEditPage() {
    const [profileEdited, setProfileEdited] = useState(false)

    const { register, control, handleSubmit } = useForm()

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
                            defaultValue={profile.firstName}
                            ref={register}
                        />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            defaultValue={profile.lastName}
                            ref={register}
                        />
                    </div>
                </div>
                <div className="two fields">
                    <SingleDropdown
                        name={"school"}
                        label={"School"}
                        options={schools}
                        control={control}
                        currentValue={profile.school}
                    />
                    <SingleDropdown
                        name={"year"}
                        label={"Year"}
                        options={years}
                        control={control}
                        currentValue={profile.graduate_date}
                    />
                </div>
                <div className="two fields">
                    <SingleDropdown
                        name={"major"}
                        label={"Major"}
                        options={majors}
                        control={control}
                        currentValue={profile.major}
                    />
                    <SingleDropdown
                        name={"minor"}
                        label={"Minor"}
                        options={minors}
                        control={control}
                    />
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
                        components={{ MenuList }}
                        filterOption={createFilter({ ignoreAccents: false })}
                        noOptionsMessage={() => "No class found"}
                        control={control}
                        defaultValue={profile.coursesTaken.map(course => ({
                            label: course.label,
                            value: course.classCode,
                        }))}
                    />
                </div>
                <div className="field">
                    <label>What are your goals?</label>
                    <Controller
                        as={Select}
                        isMulti
                        name="goals"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        options={goals}
                        control={control}
                        defaultValue={[goals[0], goals[1]]}
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
                        defaultValue={[interests[0], interests[1]]}
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
                <div className="field">
                    <label>Linkedin</label>
                    <input
                        type="text"
                        name="linkedin"
                        defaultValue={"https://www.linkedin.com/in/sett-hein/"}
                        ref={register}
                    />
                </div>

                <button type="submit" className="positive ui button">
                    Edit Profile
                </button>
            </form>
        </div>
    )
}

function MenuList(props) {
    const GROUP_HEADER_HEIGHT = 13
    const ITEM_HEIGHT = 34

    const { options, getValue } = props
    const [value] = getValue()

    const initialOffset = options.indexOf(value) * ITEM_HEIGHT

    const children = React.Children.toArray(props.children)

    function getOptionSize(option) {
        if (option.options) {
            return option.options.length * ITEM_HEIGHT + GROUP_HEADER_HEIGHT
        }
        return ITEM_HEIGHT
    }

    function getItemSize(i) {
        return getOptionSize(options[i])
    }

    const totalHeight = options.reduce((height, option) => {
        return height + getOptionSize(option)
    }, 0)

    const estimatedItemSize = totalHeight / options.length

    return (
        <List
            height={Math.min(totalHeight, ITEM_HEIGHT * 5)}
            itemCount={children.length}
            itemSize={getItemSize}
            estimatedItemSize={estimatedItemSize}
            initialScrollOffset={initialOffset}
        >
            {({ index, style }) => <div style={style}>{children[index]}</div>}
        </List>
    )
}
