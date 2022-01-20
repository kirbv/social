import React from "react"
import classes from "./Posts.module.css"
import Post from "./post/Post"
function Posts(props){
    let postText=React.createRef()
    let addPost=()=>{
        props.addPost(postText.current.value)
        postText.current.value=""
    }
    let onPostChange=()=>{
        props.onPostChange(postText.current.value)
    }
    return(
        <div className={classes.posts}>
                <input type="text" placeholder="Введите пост" ref={postText} value={props.newPostText} onChange={onPostChange}/>
                <button onClick={addPost}>Добавить пост</button>
                {props.postsData.map((item)=>{
                    return <Post postText={item.text} key={item.id}/>
                })}
            </div>
    )
}
export default Posts