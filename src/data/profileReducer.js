const ADD_POST="ADD_POST"
const POST_CHANGE="POST_CHANGE"
let initialState={
    postsData:[
        {text:"Привет всем!", id:1},
        {text:"Как дела?", id:2},
        {text:"Какое настроение?", id:3},
        {text:"Что делаете?", id:4}
    ],
    newPostText:""

}
let profileReducer=(state=initialState,action)=>{
    if(action.type==ADD_POST){
        let newPost={text:state.newPostText, id:5}
        state.postsData.unshift(newPost)
        state.newPostText=""
    }
    else if(action.type==POST_CHANGE){
        state.newPostText=action.text
    }
    return state
}
export default profileReducer
export let addPostAC=()=>{
    return{
        type: ADD_POST

    }
}
export let postChangeAC=(textac)=>{
    return{
        type: POST_CHANGE,
        text: textac
    }
}