import classes from "./create_ticket_form.module.css";
import {ComponentProps} from "react";


function InputField(props: ComponentProps<any>) {
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


export default function CreateTicketForm(): JSX.Element {

    return (
        <div className={classes.addTicketForm}>
            <form>
                <div className={classes.inputGroup}>
                    <InputField name={"Title"} placeholder={"Deal with Microsoft"} type={"text"} required={true}/>
                    <InputField name={"Name"} placeholder={"Bill Gates"} type={"text"} required={true}/>
                    <InputField name={"LI url"} placeholder={"https://www.linkedin.com/in/williamhgates/"} type={"text"} required={true}/>
                    <InputField name={"Position"} placeholder={"Founder and CEO of Microsoft"} type={"text"} required={true}/>
                    <InputField name={"Phone"}/>
                    <InputField name={"Email"} type={"email"} placeholder={"email@gmail.com"}/>
                    <button className={classes.submitBtn} type={"submit"}>Create ticket ar PipeDrive</button>
                </div>
            </form>
        </div>
    )

}