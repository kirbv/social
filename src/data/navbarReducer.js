import Bill from "../img/Bill.jpg"
import Zuck from "../img/Cuck.jpg"
import Trump from "../img/Tr.jpg"
let initialState={
    friendsData:[
        {name:"Билл Гейтс", img:Bill, id:1},
        {name:"Цукерберг", img:Zuck, id:2},
        {name:"Трамп", img:Trump, id:3}
    ]
}
let navbarReducer=(state=initialState,action={})=>{
    return state
}
export default navbarReducer