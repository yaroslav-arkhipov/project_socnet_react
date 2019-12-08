import {authAPI, authMe} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState ={
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false
}

const authReducer = (state = initialState, action) =>{

    switch (action.type) {
        case SET_USER_DATA:
            return { ...state,
                ...action.payload
                }
        default: return state;
    }

}
export const setUserAuthDataAC = (userId, email, login, isAuth) =>{return{type:SET_USER_DATA, payload:{userId, email, login, isAuth}}}
export const getUserAuthDataAC = () => (dispatch) =>{
    authMe().then(data => {

        if (data.resultCode === 0) {
            let {Id, email, login} = data.data;
            dispatch(setUserAuthDataAC(Id, email, login, true));
        }

    });
}
export const Login = (email, password, rememberme) => (dispatch) =>{
    authAPI.login(email, password, rememberme).then(data => {
        if (data.resultCode === 0) {
            dispatch(getUserAuthDataAC())
        }

    });
}

export const Logout= () => (dispatch) =>{
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserAuthDataAC(null, null, null, false));
        }

    });
}

export default authReducer;