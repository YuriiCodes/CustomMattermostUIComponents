import classes from "./sucess.module.css";
import {ComponentProps} from "react";

export default function ErrorMsg(props: ComponentProps<any>) {
    return (
        <div className={classes.error}>
            Error
        </div>
    )
}