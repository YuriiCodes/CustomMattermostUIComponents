import classes from "../customUIStyles.module.css";
import InputField from "../input_field";
import React, {useState} from "react";


interface iApiKeyEnterForm{
    oldToken: string,
    setIsApiTokenSet:  React.Dispatch<React.SetStateAction<boolean>>,
    setValue: React.Dispatch<React.SetStateAction<string>>
}
export default function ApiKeyEnterForm(props: iApiKeyEnterForm): JSX.Element {
    const [apiToken, setApiToken] = useState("");

    console.log(apiToken);
    return (
        <div className={classes.addTicketForm + " " + classes.baseBg}>
            <form onSubmit={e => {
                props.setIsApiTokenSet(true);
            }}>
                <div className={classes.inputGroup}>
                    <InputField name={"PipeDrive API key"} placeholder={""} type={"text"} required={true} setValue={props.setValue} value={props.oldToken}/>
                    <button className={classes.submitBtn} type={"submit"}>Submit API key</button>
                </div>
            </form>
        </div>
    )

}