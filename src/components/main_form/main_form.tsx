import ApiKeyEnterForm from "../api_key_enter_form";
import CreateTicketForm from "../create_ticket_form";
import React, {useState} from "react";
import classes from "../customUIStyles.module.css";
import {inputsState} from "../interfaces";


interface iChangeExistingApiToken {

    handler: React.Dispatch<React.SetStateAction<boolean>>
}

function ChangeExistingApiToken(props: iChangeExistingApiToken) {
    return (
        <div className={classes.apiSubmitted + " " + classes.baseBg}>
            <div>PipeDrive API token is already submitted</div>
            <div className={classes.changeToken} onClick={(e) => {
                props.handler(false);
            }}>Change token
            </div>
        </div>
    )
}

export default function MainForm() {
    const [apiToken, setApiToken] = useState("test_token");

    // a value that will hold an old token before the update. We need it in case user presses the "change token" value by accident.
    const [isApiTokenSet, setIsApiTokenSet] = useState(true);

    // All the values that user inputs are stored in this state,
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [LIUrl, setLIUrl] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const ticketFormObj : inputsState = {
        title: {
            title,
            setTitle
        },
        name: {
            name,
            setName
        },
        LIUrl: {
            LIUrl,
            setLIUrl,
        },
        position: {
            position,
            setPosition,
        },
        phone: {
            phone,
            setPhone,
        },
        email: {
            email,
            setEmail
        }
    }


    console.log(`apiToken: ${apiToken}`);
    console.log(`title: ${title}, name: ${name}, LIUrl: ${LIUrl}, position: ${position}, phone:${phone}, email:${email}`);
    return (
        <div>
            {/*We check if a user has already provided an API token. If there's no token, we give him a toke input form.*/}
            {isApiTokenSet ? <div>
                    <ChangeExistingApiToken handler={setIsApiTokenSet}/>
                </div> :
                <div>
                    <ApiKeyEnterForm oldToken={apiToken} setIsApiTokenSet={setIsApiTokenSet} setValue={setApiToken}/>
                </div>
            }
            <CreateTicketForm
                inputsStateForTicketForm={ticketFormObj}
                isTokenSet={isApiTokenSet}
            />

        </div>
    )
}