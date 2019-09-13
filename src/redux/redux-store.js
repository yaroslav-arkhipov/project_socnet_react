import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    ProfilePage: profileReducer, 
    DialogPage: dialogReducer,
    UsersPage: userReducer,
    authUser: authReducer
})

let store = createStore(reducers);

export default store;