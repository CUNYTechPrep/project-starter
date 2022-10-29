import React, {useState} from 'react'
import FormAdress from "../form/FormAddress"
import FormInfo from "../form/FormRentMort"
import FormBills from "../form/FormBills"
import PostFormPage from "../PostFormPage"

function PropertyForm() {
    const [step, setStep] = useState(1);

    const [address, setAddress] = useState("");

    const [rent, setRent] = useState("");
    const [tenanted, setTenanted] = useState(false);
    const [mortgage, setMortgage] = useState("");

    const [electric, setElectirc] = useState("");
    const [gas, setGas] = useState("");
    const [water, setWater] = useState("");

    //proceed to next step
    const nextStep = () => {
        setStep(step + 1);
    };

    //go back to previous step
    const prevStep = () => {
        setStep(step - 1);
    };

    //handle field changes
    const handleChange = (input) => e => {
        if(input === "address"){
            setAddress(e.target.value);
        } else if(input ==="rent"){
            setRent(Number(e.target.value));
        } else if(input ==="tenanted"){
            setTenanted(!tenanted);
        }else if(input ==="mortgage"){
            setMortgage(Number(e.target.value));
        } else if(input ==="electric"){
            setElectirc(Number(e.target.value));
        } else if(input ==="gas"){
            setGas(Number(e.target.value));
        } else if(input ==="water"){
            setWater(Number(e.target.value));
        } 
    }

    const values = {step, address, rent, tenanted, mortgage, electric, gas, water};

    if(step === 1){
        return(
            <FormAdress
            nextStep = {nextStep}
            handleChange = {handleChange}
            values = {values}
            />
        )
    }
    if(step === 2)
        return <FormInfo
                prevStep = {prevStep}
                nextStep = {nextStep}
                handleChange = {handleChange}
                values = {values}
                />
    if(step === 3)
        return <FormBills
                prevStep = {prevStep}
                nextStep = {nextStep}
                handleChange = {handleChange}
                values = {values}
                />
    if(step === 4)
        return <PostFormPage
                prevStep = {prevStep}
                values = {values}
                />
}

export default PropertyForm;