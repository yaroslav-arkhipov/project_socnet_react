import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import userReducer from "./users-reducer";

let reducers = combineReducers({
    ProfilePage: profileReducer, 
    DialogPage: dialogReducer,
    UsersPage: userReducer
})

let store = createStore(reducers);

export default store;