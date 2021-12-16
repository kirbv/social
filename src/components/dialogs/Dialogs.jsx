import React from "react"
import classes from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem"
function Dialogs(){
    let dialogsNames=[
        {name:"Трамп", id:"1"},
        {name:"Цукерберг", id:"2"},
        {name:"Билл Гейтс", id:"3"}
    ]
    return(
        <div className={classes.dialogs}>
            <div className={classes.peoples}>
                {dialogsNames.map((item)=>{
                    return <DialogsItem name={item.name} id={item.id}/>
                })}
            </div>
            <div className={classes.messages}>
                <p>Привет, как дела?</p>
                <p> Что ты делаешь?</p>
                <textarea>
                    
                </textarea>
                <button>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs