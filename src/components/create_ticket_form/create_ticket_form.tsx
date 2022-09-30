import classes from "../customUIStyles.module.css";
import React, {ComponentProps, useState} from "react";
import InputField from "../input_field/inputField";
import {inputsState} from "../interfaces";


interface iCreateTicketForm {
    inputsStateForTicketForm?: inputsState,
    isTokenSet: boolean
}

export default function CreateTicketForm(props: iCreateTicketForm): JSX.Element {

    return (
        <div className={classes.addTicketForm + " " + classes.baseBg}>
            <form onSubmit={async e => {
                e.preventDefault();


                // const response = await fetch("https://reqbin.com/echo/post/json", {
                //         method: 'POST',
                //         headers: {
                //             'Accept': 'application/json',
                //             'Content-Type': 'application/json'
                //         },
                //         body: `{
                //     "Id": 78912,
                //     "Customer": "Jason Sweet",
                //     "Quantity": 1,
                //     "Price": 18.00
                //     }`,
                //     }
                // );
                // response.json().then(data => {
                //     console.log(data);
                // });

                const response = await fetch("https://api.pipedrive.com/v1/leads?api_token=9c1ba905eeccc08eb6df0f4397b90aa7f85a6172", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    body: `{
                        "title": "${props.inputsStateForTicketForm?.title}",
                        "owner_id": 13439491,
                        "person_id": 1,
                        "value": {
                            "amount": 40,
                            "currency": "UAH"
                        }
                    }`
                });
                response.json().then(data => {
                    console.log(data);
                })

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