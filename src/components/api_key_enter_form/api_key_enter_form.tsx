import classes from "../customUIStyles.module.css";
import InputField from "../inputField";


export default function ApiKeyEnterForm(): JSX.Element {
    return (
        <div className={classes.addTicketForm}>
            <form>
                <div className={classes.inputGroup}>
                    <InputField name={"PipeDrive API key"} placeholder={""} type={"text"} required={true}/>
                    <button className={classes.submitBtn} type={"submit"}>Submit API key</button>
                </div>
            </form>
        </div>
    )

}