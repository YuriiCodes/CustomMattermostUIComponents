import React from "react";

import classes from "./inputField.module.css";

interface InputFieldProps {
    name: string,
    value?: string,
    placeholder?: string,
    required?: boolean,
    // Text by default, so we leave it as optional. Can also be email/phone/password, etc.
    type?: string,
    // A function that sets a state value to whatever user inputs in the field. That function is passed from the parent component via props.
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function InputField(props: InputFieldProps) {

    return (
        <div className={classes.inputField}>
            <label htmlFor={props.name}>{props.name || "value"}: </label>

            <input id={props.name}
                   className={classes.inputFieldInp}
                   placeholder={props.placeholder}
                   type={props.type}
                   required={props.required}
                   onChange={(e) => {
                       props.setValue(e.target.value);
                   }}
                   value={props.value}
            />
        </div>
    )
}