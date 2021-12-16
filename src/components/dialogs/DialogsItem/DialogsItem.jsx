import React from "react"
import classes from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom"
function DialogsItem(props){
    return(
        <div>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}
export default DialogsItem