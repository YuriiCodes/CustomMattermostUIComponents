import {ComponentProps} from "react";
import classes from "./sucess.module.css";


export default function SuccessMsg(props: ComponentProps<any>) {
    return (
        <div className={classes.success}>
            Success
        </div>
    )
}