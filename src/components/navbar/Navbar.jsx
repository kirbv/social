import React from "react"
import classes from "./Navbar.module.css"
function Navbar(){
    return(
        <div className="Navbar">
            <a href="" className={classes.link}>Профиль</a>
            <a href="" className={classes.link}>Сообщения</a>
            <a href="" className={classes.link}>Пользователи</a>
        </div>
    )
}
export default Navbar