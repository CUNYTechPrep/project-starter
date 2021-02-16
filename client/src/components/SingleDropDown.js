import React from 'react'
import Select from "react-select"
import {Controller } from "react-hook-form"


export default function SingleDropdown(props) {
    return (

        <div className="field">
            <label>{props.label}</label>
                      <Controller
                        as={Select}
                        name={props.name}
                        options={props.options}
                        control={props.control}
                        defaultValue = {props.options.find(option => option.value === props.currentValue)}
                    />
                    </div>
  
    )
}
