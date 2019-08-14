import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let reducers = combineReducers({
    ProfilePage: profileReducer, 
    DialogPage: dialogReducer
})

let store = createStore(reducers);

export default store;