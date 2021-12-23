import React from "react"
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom"
import Friends from "./Friends/Friends"
function Navbar(props){
    return(
        <div className="Navbar">
            <NavLink to="/profile" className={classes.link}>Профиль</NavLink>
            <NavLink to="/dialogs" className={classes.link}>Сообщения</NavLink>
            <NavLink to="/users" className={classes.link}>Пользователи</NavLink>
            <Friends friendsData={props.navbarPage.friendsData}/>
        </div>
    )
}
export default Navbar