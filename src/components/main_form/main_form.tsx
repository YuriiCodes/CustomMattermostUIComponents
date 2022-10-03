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
    const [apiToken, setApiToken] = useState("9c1ba905eeccc08eb6df0f4397b90aa7f85a6172");

    // Bool state piece that determines if the form is locked for another request, or not
    const [canRequestBeSent, setCanRequestBeSent] = useState(true);

    // A bool variable that is used to output success massage when the request is done.
    const [ isRequestSuccessful, setIsRequestSuccessful] = useState(false);


    // if something goes wrong with request, responseMsg will hold the error code.
    const [ responseMsg, setResponseMsg] = useState("");

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

    console.log("OWOO RESPONSE succeSFILL:" + isRequestSuccessful )
    return (
        <div>
            {/*We check if a user has already provided an API token. If there's no token, we give him a toke input form.*/}
            {canRequestBeSent ? <div>
                    <ChangeExistingApiToken handler={setCanRequestBeSent}/>
                </div> :
                <div>
                    <ApiKeyEnterForm oldToken={apiToken} setIsApiTokenSet={setCanRequestBeSent} setValue={setApiToken}/>
                </div>
            }
            <CreateTicketForm
                apiToken={apiToken}
                inputsStateForTicketForm={ticketFormObj}

                canRequestBeSent={canRequestBeSent}
                setCanRequestBeSent={setCanRequestBeSent}

                isRequestSuccessful={isRequestSuccessful}
                setIsRequestSuccessful={setIsRequestSuccessful}
            />

        </div>
    )
}