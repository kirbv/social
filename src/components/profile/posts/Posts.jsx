import React from "react"
import classes from "./Posts.module.css"
import Post from "./post/Post"
import { addPostAC, postChangeAC } from "../../../data/profileReducer"
function Posts(props){
    let postText=React.createRef()
    let addPost=()=>{
        props.dispatch(addPostAC())
        postText.current.value=""
    }
    let onPostChange=()=>{
        props.dispatch(postChangeAC(postText.current.value))
    }
    return(
        <div className={classes.posts}>
                <input 
                    ref={postText}
                    type="text" 
                    placeholder="Введите пост" 
                    value={props.newPostText} 
                    onChange={onPostChange}/>
                <button onClick={addPost}>Добавить пост</button>
                {props.postsData.map((item)=>{
                    return <Post postText={item.text} key={item.id}/>
                })}
            </div>
    )
}
export default Posts