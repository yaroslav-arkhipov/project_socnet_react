import {getUsers} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW= 'UNFOLLOW';
const SET_USERS= 'SET_USERS';
const SET_CURRENT_PAGE= 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT= 'SET_TOTAL_USERS_COUNT';
const SET_PAGE_SIZE= 'SET_PAGE_SIZE';
const SET_FETCHING= 'SET_FETCHING';
const SET_FOLLOWING_PROGRESS= 'SET_FOLLOWING_PROGRESS';


let initialState ={
    users: [ ],
    PageSize:10,
    totalCount: 0,
    currentPage: 2,
    isFetching: true,
    followingProgress: false
}

const userReducer = (state = initialState, action) =>{

    switch (action.type) {
        case FOLLOW:
            return { ...state,
            users: state.users.map(u=>{
                if (u.id === action.userID) {
                    return {...u, followed: true}
                }
                return u;}
                )}
        case UNFOLLOW:
            return { ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;}
                )}
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state,currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state,totalCount:action.totalCount}
        }
        case SET_PAGE_SIZE: {
            return {...state,PageSize:action.PageSize}
        }
        case SET_FETCHING: {
            return {...state,isFetching:action.isFetching}
        }
        case SET_FOLLOWING_PROGRESS: {
            return {...state,followingProgress:action.isFetching}
        }
        default: return state;
    }

}
export const followAC = (userID) =>{return{type:FOLLOW, userID}}
export const unfollowAC = (userID) =>{return{type:UNFOLLOW, userID}}
export const SetUsersAC = (users) =>{return{type: SET_USERS, users}}
export const SetPageAC = (currentPage) =>{return{type: SET_CURRENT_PAGE, currentPage}}
export const SetTotalUsersCountAC = (totalCount) =>{return{type: SET_TOTAL_USERS_COUNT, totalCount}}
export const SetCountOnPageAC = (PageSize) =>{return{type: SET_PAGE_SIZE, PageSize}}
export const SetIsFetchingAC = (isFetching) =>{return{type: SET_FETCHING, isFetching}}

export const getUsersThunkCreator = (currentPage, PageSize) =>{
    return (dispatch) =>{
    dispatch(SetIsFetchingAC(true));
    getUsers(currentPage, PageSize).then(data => {
        dispatch(SetIsFetchingAC(false));
        dispatch(SetUsersAC(data.items));
        dispatch(SetTotalUsersCountAC(data.totalCount));
    });
}
}

export default userReducer;