import {getProfile} from "../api/api";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT= 'UPDATE-POST-TEXT';
const SET_USER_PROFILE= 'SET_USER_PROFILE';
const SET_STATUS= 'SET_STATUS';

let initialState ={
    PostsData: [
        {id: 1, post: 'Привет пацаны', likecount: 11},
        {id: 2, post: 'Дароу', likecount: 15}
    ],
    NewPostText: '',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) =>{

   switch (action.type) {
       case ADD_POST:{
           let newPost = {id: 3, post: action.postMessage, likecount: 0};
           return {...state,
           PostsData:[...state.PostsData, newPost],
           NewPostText : ''
       }
   }
       case UPDATE_POST_TEXT:{
           return {...state,
               NewPostText: action.newText}
       }
       case SET_STATUS:{
           return {...state,
               status: action.status}
       }
       case SET_USER_PROFILE: {
           return {
               ...state,
               profile: action.profile
           }
       }
       default: return state;
   }

}
export const addPostActionCreator = (text) =>{
    return{
        type:ADD_POST, postMessage: text
    }
}
export const UpdatePostTextActionCreator = (text) =>{
    return{
        type: UPDATE_POST_TEXT, newText: text
    }
}
export const setUserProfile = (profile) =>{
    return{
        type: SET_USER_PROFILE, profile
    }
}
export const setStatus = (status) =>{
    return{
        type: SET_STATUS, status
    }
}
export const getUserProfile = (userID) => (dispatch) => {
    getProfile(userID).then(data => {
        dispatch(setUserProfile(data));

    });
}
export const getStatus = (userID) => (dispatch) => {
    profileAPI.getStatus(userID).then(data => {
        dispatch(setStatus(data));

    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if(data.resultCode === 0) {
            dispatch(status);
        }

    });
}

export default profileReducer;