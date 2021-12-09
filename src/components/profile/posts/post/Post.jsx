import React from "react"
import classes from "./Post.module.css"
import avaMini from "../../../../img/elon_mini.jpg"
function Post(props){
    return(
                <div className={classes.post}>
                    <img src={avaMini} alt="" />
                    <span>Илон Маск</span>
                    <p>{props.postText}</p>
                </div>
    )
}
export default Post