import {authMe} from "../api/api";

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
                ...action.data,
                isAuth: true
                }
        default: return state;
    }

}
export const setUserAuthDataAC = (userId, email, login) =>{return{type:SET_USER_DATA, data:{userId, email, login}}}
export const getUserAuthDataAC = () => (dispatch) =>{
    authMe().then(data => {

        if (data.resultCode === 0) {
            let {Id, email, login} = data.data;
            dispatch(setUserAuthDataAC(Id, email, login));
        }

    });
}



export default authReducer;