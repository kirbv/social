import React from "react"
import classes from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem"
function Dialogs(props){
    return(
        <div className={classes.dialogs}>
            <div className={classes.peoples}>
                {props.dialogsPage.dialogsNames.map((item)=>{
                    return <DialogsItem name={item.name} id={item.id}/>
                })}
            </div>
            <div className={classes.messages}>
                {props.dialogsPage.messagesData.map((item)=>{
                    return <p>{item.mes}</p>
                })}
                <textarea>
                    
                </textarea>
                <button>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs