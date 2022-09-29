import classes from "../customUIStyles.module.css";
import InputField from "../input_field";
import {useState} from "react";


export default function ApiKeyEnterForm(): JSX.Element {
    const [apiToken, setApiToken] = useState("");
    console.log(apiToken);
    return (
        <div className={classes.addTicketForm}>
            <form>
                <div className={classes.inputGroup}>
                    <InputField name={"PipeDrive API key"} placeholder={""} type={"text"} required={true} setValue={setApiToken}/>
                    <button className={classes.submitBtn} type={"submit"}>Submit API key</button>
                </div>
            </form>
        </div>
    )

}