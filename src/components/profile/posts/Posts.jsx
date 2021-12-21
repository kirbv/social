import React from "react"
import classes from "./Posts.module.css"
import Post from "./post/Post"
function Posts(props){
    return(
        <div className={classes.posts}>
                <input type="text" placeholder="Введите пост"/>
                <button>Добавить пост</button>
                {props.postsData.map((item)=>{
                    return <Post postText={item.text}/>
                })}
            </div>
    )
}
export default Posts