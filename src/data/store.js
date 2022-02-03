import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer"
import messageReducer from "./messageReducer"
import navbarReducer from "./navbarReducer";
let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:messageReducer,
    navbarPage:navbarReducer
})
 let store=createStore(reducers)
 export default store