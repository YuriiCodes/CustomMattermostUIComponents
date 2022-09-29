import classes from "../customUIStyles.module.css";
import {ComponentProps, useState} from "react";
import InputField from "../input_field/inputField";


export default function CreateTicketForm(): JSX.Element {

    // All the values that user inputs are stored in this state,
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [LIUrl, setLIUrl] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className={classes.addTicketForm}>
            <form>
                <div className={classes.inputGroup}>
                    <InputField name={"Title"}
                                placeholder={"Deal with Microsoft"}
                                type={"text"} required={true}
                                setValue={setTitle}
                    />


                    <InputField name={"Name"}
                                placeholder={"Bill Gates"}
                                type={"text"}
                                required={true}
                                setValue={setName}
                    />


                    <InputField name={"LI url"}
                                placeholder={"https://www.linkedin.com/in/williamhgates/"}
                                type={"text"}
                                required={true}
                                setValue={setLIUrl}
                    />


                    <InputField name={"Position"}
                                placeholder={"Founder and CEO of Microsoft"}
                                type={"text"}
                                required={true}
                                setValue={setPosition}
                    />


                    <InputField name={"Phone"}
                                setValue={setPhone}
                    />
                    <InputField name={"Email"}
                                type={"email"}
                                placeholder={"email@gmail.com"}
                                setValue={setEmail}
                    />

                    <button className={classes.submitBtn} type={"submit"}>Create ticket ar PipeDrive</button>
                </div>
            </form>
        </div>
    )

}