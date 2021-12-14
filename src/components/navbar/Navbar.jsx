import React from "react"
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom"
function Navbar(){
    return(
        <div className="Navbar">
            <NavLink to="/profile" className={classes.link}>Профиль</NavLink>
            <NavLink to="/dialogs" className={classes.link}>Сообщения</NavLink>
            <NavLink to="/users" className={classes.link}>Пользователи</NavLink>
        </div>
    )
}
export default Navbar