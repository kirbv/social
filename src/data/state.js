import Bill from "../img/Bill.jpg"
import Zuck from "../img/Cuck.jpg"
import Trump from "../img/Tr.jpg"
import {rerenderTree} from "../render"
let state={
    profilePage:{
        postsData:[
            {text:"Привет всем!", id:1},
            {text:"Как дела?", id:2},
            {text:"Какое настроение?", id:3},
            {text:"Что делаете?", id:4}
        ],
        newPostText:"Hello"

    },
    dialogsPage:{
        dialogsNames:[
            {name:"Трамп", id:1},
            {name:"Цукерберг", id:2},
            {name:"Билл Гейтс", id:3}
        ],
        messagesData:[
            {mes:"Привет, как дела?", id:1},
            {mes:"Что ты делаешь?", id:2}
        ]
    },
    navbarPage:{
        friendsData:[
            {name:"Билл Гейтс", img:Bill, id:1},
            {name:"Цукерберг", img:Zuck, id:2},
            {name:"Трамп", img:Trump, id:3}
        ]
    }
}
export let addPost=(postText)=>{
    let newPost={text:postText, id:5}
    state.profilePage.postsData.unshift(newPost)
    state.profilePage.newPostText=""
    rerenderTree(state)
}
export let addMessage=(messageText)=>{
    let newMessage={mes:messageText, id:3}
    state.dialogsPage.messagesData.push(newMessage)
    console.log(state);
    rerenderTree(state)
}
export let onPostChange=(text)=>{
    state.profilePage.newPostText=text
    rerenderTree(state)
}
export default state