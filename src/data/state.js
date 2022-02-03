import Bill from "../img/Bill.jpg"
import Zuck from "../img/Cuck.jpg"
import Trump from "../img/Tr.jpg"
import messageReducer from "./messageReducer"
import profileReducer from "./profileReducer"
let store={


 _state:{
    profilePage:{
        postsData:[
            {text:"Привет всем!", id:1},
            {text:"Как дела?", id:2},
            {text:"Какое настроение?", id:3},
            {text:"Что делаете?", id:4}
        ],
        newPostText:""

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
        ], 
        newMessageText:""
    },
    navbarPage:{
        friendsData:[
            {name:"Билл Гейтс", img:Bill, id:1},
            {name:"Цукерберг", img:Zuck, id:2},
            {name:"Трамп", img:Trump, id:3}
        ]
    }
},
dispatch(action){
    this._state.profilePage=profileReducer(this._state.profilePage,action)
    this.rerenderTree(this._state)
    this._state.dialogsPage=messageReducer(this._state.dialogsPage,action)
    this.rerenderTree(this._state)
},
rerenderTree(){
    console.log("Hello");
},
 subscribe(observer){
    this.rerenderTree=observer
},
getState(){
    return this._state
}
}
export default store