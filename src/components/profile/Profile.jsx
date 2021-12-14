import React from "react"
import classes from "./Profile.module.css"
import ava from "../../img/elon.jpg"
import Posts from "./posts/Posts"
function Profile(props){
    return(
        <div className="Profile">
            <div className={classes.me}>
                <img src={ava} alt="Profile photo" />
                <div>
                    <p>{props.name}</p>
                    <p>{props.status}</p>
                    <p>{props.livePlace}</p>
                </div>
            </div>
            <Posts/>
        </div>
    )
}
export default Profile