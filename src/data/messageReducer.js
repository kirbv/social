const NEW_MES="NEW_MES"
const MES_CHANGE="MES_CHANGE"
let initialState={
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
}
let messageReducer=(state=initialState,action)=>{
    if(action.type==NEW_MES){
        let newMessage={mes:state.newMessageText, id:3}
        state.messagesData.push(newMessage)
        state.newMessageText=""
    }
    else if(action.type==MES_CHANGE){
        state.newMessageText=action.text
    }
    return state
}
export default messageReducer
export let newMesAC=()=>{
    return{
        type: NEW_MES
    }
}
export let mesChangeAC=(textac)=>{
    return{
        type: MES_CHANGE,
        text: textac
    }
}