import React from "react";

export interface inputsState {
    title?: {
        title: string,
        setTitle: React.Dispatch<React.SetStateAction<string>>
    },
    name?: {
        name: string
        setName: React.Dispatch<React.SetStateAction<string>>
    },
    LIUrl?: {
        LIUrl: string
        setLIUrl: React.Dispatch<React.SetStateAction<string>>
    },
    position?: {
        position: string
        setPosition: React.Dispatch<React.SetStateAction<string>>
    },
    phone?: {
        phone: string
        setPhone: React.Dispatch<React.SetStateAction<string>>,
    },
    email?: {
        email: string,
        setEmail: React.Dispatch<React.SetStateAction<string>>
    }

}

export interface addLeadApiResponse{
    success: boolean
}