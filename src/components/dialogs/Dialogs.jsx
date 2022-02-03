import React from "react"
import { mesChangeAC, newMesAC } from "../../data/messageReducer"
import classes from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem"
import Message from "./message/Message"
function Dialogs(props){
    let messageText=React.createRef()
    let addMessage=()=>{
        props.dispatch(newMesAC());
        messageText.current.value=""
    }
    let onMessageChange=()=>{
        props.dispatch(mesChangeAC(messageText.current.value))
    }
    return(
        <div className={classes.dialogs}>
            <div className={classes.peoples}>
                {props.dialogsPage.dialogsNames.map((item)=>{
                    return <DialogsItem name={item.name} id={item.id}/>
                })}
            </div>
            <div className={classes.messages}>
                {props.dialogsPage.messagesData.map((item)=>{
                    return <Message messageText={item.mes}/>
                })}
                <textarea ref={messageText} value={props.newMessageText} onChange={onMessageChange}>
                    
                </textarea>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs