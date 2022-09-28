import {ComponentProps} from "react";

import classes from "./inputField.module.css";
export default function InputField(props: ComponentProps<any>) {
    return (
        <div className={classes.inputField}>
            <label htmlFor={props.name}>{props.name || "value"}: </label>
            <input id={props.name}
                   className={classes.inputFieldInp}
                   placeholder={props.placeholder}
                   type={props.type}
                   required={props.required}
            />
        </div>
    )
}