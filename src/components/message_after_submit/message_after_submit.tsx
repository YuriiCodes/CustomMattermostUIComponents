import {ComponentProps} from "react";
import classes from "./message_after_submit.module.css";

export default function MessageAfterSubmit(props: ComponentProps<any>) {
    return (
        <div className={classes.msgAfterSubmit}>
            {props.message}
        </div>
    )
}