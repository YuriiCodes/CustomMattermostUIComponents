import classes from "../customUIStyles.module.css";
import React, {ComponentProps, useState} from "react";
import InputField from "../input_field/inputField";


interface iCreateTicketForm {
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setLIUrl: React.Dispatch<React.SetStateAction<string>>,
    setPosition: React.Dispatch<React.SetStateAction<string>>,
    setPhone: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    isTokenSet: boolean
}

export default function CreateTicketForm(props: iCreateTicketForm): JSX.Element {


    return (
        <div className={classes.addTicketForm+ " " + classes.baseBg} >
            <form>
                <div className={classes.inputGroup}>
                    <InputField name={"Title"}
                                placeholder={"Deal with Microsoft"}
                                type={"text"} required={true}
                                setValue={props.setTitle}
                    />


                    <InputField name={"Name"}
                                placeholder={"Bill Gates"}
                                type={"text"}
                                required={true}
                                setValue={props.setName}
                    />


                    <InputField name={"LI url"}
                                placeholder={"https://www.linkedin.com/in/williamhgates/"}
                                type={"text"}
                                required={true}
                                setValue={props.setLIUrl}
                    />


                    <InputField name={"Position"}
                                placeholder={"Founder and CEO of Microsoft"}
                                type={"text"}
                                required={true}
                                setValue={props.setPosition}
                    />


                    <InputField name={"Phone"}
                                setValue={props.setPhone}
                    />
                    <InputField name={"Email"}
                                type={"email"}
                                placeholder={"email@gmail.com"}
                                setValue={props.setEmail}
                    />

                    {props.isTokenSet ?
                        <button className={classes.submitBtn} type={"submit"} disabled={false}>Create ticket ar PipeDrive</button>
                        :
                        <button className={classes.disabledBtn} type={"submit"} disabled={true}>Create ticket ar PipeDrive</button>
                    }

                </div>
            </form>
        </div>
    )

}