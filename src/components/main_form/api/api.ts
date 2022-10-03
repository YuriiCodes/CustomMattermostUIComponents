import React from "react";
import {addLeadApiResponse} from "../../interfaces";


export const PipedriveApi = {
    async addLead(canRequestBeSent: boolean, setCanRequestBeSent: React.Dispatch<React.SetStateAction<boolean>>, apiKey: string, title: string, value: number, owner_id: number, person_id: number) {
        return new Promise(async (resolve, reject) => {
            if (canRequestBeSent) {
                // We block the form from submitting again
                setCanRequestBeSent(false);
                const response = await fetch(`https://api.pipedrive.com/v1/leads?api_token=${apiKey}`, {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    body: `{
                        "title": "${title}",
                        "owner_id": ${owner_id},
                        "person_id": ${person_id},
                        "value": {
                            "amount": ${value},
                            "currency": "UAH"
                        }
                    }`
                });
                response.json().then(data => {
                    console.log(data);
                    resolve(data);
                })
                    .catch(err => {
                        reject(err);
                    })
            }
        })


    }
}