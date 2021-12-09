import React from "react"
import classes from "./Posts.module.css"
import Post from "./post/Post"
function Posts(){
    return(
        <div className={classes.posts}>
                <input type="text" placeholder="Введите пост"/>
                <button>Добавить пост</button>
                <Post postText="Привет всем!"/>
                <Post postText="Как дела?"/>
                <Post postText="Какое настроение?"/>
                <Post postText="Что делаете?"/>
            </div>
    )
}
export default Posts