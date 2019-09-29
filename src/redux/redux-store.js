import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    ProfilePage: profileReducer, 
    DialogPage: dialogReducer,
    UsersPage: userReducer,
    authUser: authReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;