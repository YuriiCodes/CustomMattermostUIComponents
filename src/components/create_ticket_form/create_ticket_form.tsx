import classes from "../customUIStyles.module.css";
import React, {ComponentProps, useState} from "react";
import InputField from "../input_field/inputField";
import {addLeadApiResponse, inputsState} from "../interfaces";
import {PipedriveApi} from "../main_form/api/api";
import SuccessMsg from "../alerts/succes";
import ErrorMsg from "../alerts/error";

interface iCreateTicketForm {
    apiToken: string,
    inputsStateForTicketForm?: inputsState,

    canRequestBeSent: boolean,
    setCanRequestBeSent: React.Dispatch<React.SetStateAction<boolean>>,

    isRequestSuccessful: boolean,
    setIsRequestSuccessful: React.Dispatch<React.SetStateAction<boolean>>,
}

// TODO: add a feedback about request
export default function CreateTicketForm(props: iCreateTicketForm): JSX.Element {

    // a piece of state that is defines if we shall show the user feedback about create ticket request (success/error).
    const [isRequestFeedbackActive, setIsRequestFeedbackActive] = useState(false);

    return (
        <>
            <div className={classes.addTicketForm + " " + classes.baseBg}>
                <form onSubmit={async e => {
                    e.preventDefault();

                    //value is a hardcoded field rn, just like owner_id and person_id.

                    // @ts-ignore
                    const apiRes: addLeadApiResponse = await PipedriveApi.addLead(props.canRequestBeSent, props.setCanRequestBeSent, props.apiToken, props.inputsStateForTicketForm?.title?.title, 40, 13439491, 1);
                    console.log(`apiRes: ${apiRes}`);
                    props.setIsRequestSuccessful(apiRes.success);
                    setIsRequestFeedbackActive(true);

                    setTimeout(() => {
                            setIsRequestFeedbackActive(false);
                        },
                        7000);

                }}>
                    <div className={classes.inputGroup}>
                        <InputField name={"Title"}
                                    placeholder={"Deal with Microsoft"}
                                    type={"text"} required={true}
                            // @ts-ignore
                                    setValue={props.inputsStateForTicketForm.title.setTitle}
                        />


                        <InputField name={"Name"}
                                    placeholder={"Bill Gates"}
                                    type={"text"}
                                    required={true}
                            // @ts-ignore
                                    setValue={props.inputsStateForTicketForm.name.setName}
                        />


                        <InputField name={"LI url"}
                                    placeholder={"https://www.linkedin.com/in/williamhgates/"}
                                    type={"text"}
                                    required={true}
                            // @ts-ignore
                                    setValue={props.inputsStateForTicketForm.LIUrl.setLIUrl}
                        />


                        <InputField name={"Position"}
                                    placeholder={"Founder and CEO of Microsoft"}
                                    type={"text"}
                                    required={true}
                            // @ts-ignore
                                    setValue={props.inputsStateForTicketForm.position.setPosition}
                        />


                        <InputField name={"Phone"}
                            // @ts-ignore
                                    setValue={props.inputsStateForTicketForm.phone.setPhone}
                        />
                        <InputField name={"Email"}
                                    type={"email"}
                                    placeholder={"email@gmail.com"}
                            // @ts-ignore
                                    setValue={props.inputsStateForTicketForm.email.setEmail}
                        />

                        {props.canRequestBeSent ?
                            <button className={classes.submitBtn} type={"submit"} disabled={false}>Create ticket ar
                                PipeDrive</button>
                            :
                            <button className={classes.disabledBtn} type={"submit"} disabled={true}>Create ticket ar
                                PipeDrive</button>
                        }

                    </div>
                </form>


            </div>

            {/*TODO*/}:
            {/*1. Style success and error components*/}
            {/*2. Add interactivity to buttons*/}


            {/*Render success message*/}
            {props.isRequestSuccessful && isRequestFeedbackActive ?
                <SuccessMsg/> :
                <> </>
            }

            {/*Render error message*/}
            {!props.isRequestSuccessful && isRequestFeedbackActive ?
                <ErrorMsg/> :
                <> </>
            }
        </>

    )

}