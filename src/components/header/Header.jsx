import React from "react"
import classes from "./Header.module.css"
import logo from "../../img/logo.svg"
function Header(){
    return(
        <div className="Header">
            <img src={logo} className={classes.logo} alt=""/>
        </div>
    )
}
export default Header