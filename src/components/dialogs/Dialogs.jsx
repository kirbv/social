import React from "react"
import classes from "./Dialogs.module.css"
function Dialogs(){
    return(
        <div className={classes.dialogs}>
            <div className={classes.peoples}>
                <a href="">Трамп</a>
                <a href="">Цукерберг</a>
                <a href="">Билл Гейтс</a>
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