import classes from "../customUIStyles.module.css";
import React, {ComponentProps, useState} from "react";
import InputField from "../input_field/inputField";
import {inputsState} from "../interfaces";
import {PipedriveApi} from "../main_form/api/api";

interface iCreateTicketForm {
    apiToken: string,
    inputsStateForTicketForm?: inputsState,
    isTokenSet: boolean
}

// TODO: add a feedback about request
export default function CreateTicketForm(props: iCreateTicketForm): JSX.Element {
    return (
        <div className={classes.addTicketForm + " " + classes.baseBg}>
            <form onSubmit={async e => {
                e.preventDefault();
                // @ts-ignore
                PipedriveApi.addLead(props.apiToken, props.inputsStateForTicketForm?.title?.title, 40, 13439491,1);

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

                    {props.isTokenSet ?
                        <button className={classes.submitBtn} type={"submit"} disabled={false}>Create ticket ar
                            PipeDrive</button>
                        :
                        <button className={classes.disabledBtn} type={"submit"} disabled={true}>Create ticket ar
                            PipeDrive</button>
                    }

                </div>
            </form>
        </div>
    )

}