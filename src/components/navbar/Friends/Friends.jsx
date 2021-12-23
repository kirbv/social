import React from "react"
import classes from "./Friends.module.css"
function Friends(props){
    return(
        <div className={classes.friends}>
            {props.friendsData.map((item)=>{
                return(
                <div className={classes.friend} key={item.id}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                </div>
                )
            })}
                
        </div>
    )
}
export default Friends