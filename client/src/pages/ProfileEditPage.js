import React, {useState}  from 'react';
import './ProfilePage.css';
import Select from 'react-select';
import {school, year, interest} from '../components/SchoolYearData';
import {useForm, Controller} from 'react-hook-form';

export default function ProfileEditPage() {
      
    const {register, control, handleSubmit, errors} = useForm();

    const onSubmit = (data) =>{
        console.log(data)
    }
   

    return (
        <div className="profile">
            <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                <div className="two fields">
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="firstname" placeholder="First Name" ref={register({required: true})}/>
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="lastname" placeholder="Last Name" ref={register({required: true})} />
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>School</label>
                        <Controller
                            name="school"
                            as={Select}
                            options={school}
                            control = {control} 
                        />
                    </div>
                    <div className="field">
                        <label>Year</label>
                        <Controller
                            name="year"
                            options={year}
                            as={Select}
                            control = {control}
                        />
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>Major</label>
                        <Controller
                            name="school"
                            as={Select}
                            options={school}
                            control = {control}
                        />
                    </div>
                    <div className="field">
                        <label>Minor</label>
                        <Controller
                            name="year"
                            options={year}
                            as={Select}
                            control = {control}
                        />
                    </div>
                </div>
                <div className='field'>
                    <label>Classes</label>
                    <Controller
                        as={Select}
                        isMulti
                        name="classes"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        options={school}
                        control= {control}
                    />
                </div>
                <div className='field'>
                    <label>Interest</label>
                    <Controller
                        as={Select}
                        isMulti
                        name="interest"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        options={interest}
                        control= {control}
                    />
                </div>
                <div class="field">
                <label>Bio</label>
                    <textarea 
                    spellcheck="false"
                    name="bio"
                    ref={register}
                    ></textarea>
                </div>


                    <input type="submit" />
            </form>
            
        </div>
    )
}
