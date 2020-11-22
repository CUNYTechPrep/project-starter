import React, { useState } from "react"
import "./ProfilePage.css"
import Select from "react-select"
import { schools, year, interest } from "../components/SchoolYearData"
import { useForm, Controller } from "react-hook-form"
import auth from "../services/auth"
import { Redirect } from "react-router-dom"
import axios from "axios"

export default function ProfileEditPage() {
    const { register, control, handleSubmit, errors } = useForm()

    const onSubmit = async data => {
        // POST request
        const response = await axios.post("/api/profile", data)
        console.log(response.data)
    }

    if (!auth.profile) return <Redirect to="profile" />

    const profile = auth.profile

    return (
        <div className="profile">
            <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                <div className="two fields">
                    <div className="field">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            defaultValue={profile.firstName}
                            ref={register}
                        />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastname"
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
                            defaultValue={profile.school}
                        />
                    </div>
                    <div className="field">
                        <label>Year</label>
                        <Controller name="year" options={year} as={Select} control={control} />
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>Major</label>
                        <Controller
                            name="school"
                            as={Select}
                            options={schools}
                            control={control}
                            defaultValue={profile.major}
                        />
                    </div>
                    <div className="field">
                        <label>Minor</label>
                        <Controller name="year" options={year} as={Select} control={control} />
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
                        options={schools}
                        control={control}
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
                        options={interest}
                        control={control}
                    />
                </div>
                <div class="field">
                    <label>Bio</label>
                    <textarea
                        spellcheck="false"
                        name="bio"
                        ref={register}
                        defaultValue={profile.bio}
                    ></textarea>
                </div>

                <input type="submit" />
            </form>
        </div>
    )
}
