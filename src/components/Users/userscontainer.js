import React from 'react';
import {connect} from "react-redux";
import Users from "./users";
import {addPostActionCreator, UpdatePostTextActionCreator} from "../../redux/profile-reducer";
import {followAC, SetUsersAC, unfollowAC, SetPageAC, SetTotalUsersCountAC} from "../../redux/users-reducer";

let MapStateToProps = (state) =>{
    return {
        users: state.UsersPage.users,
        PageSize: state.UsersPage.PageSize,
        totalCount: state.UsersPage.totalCount,
        currentPage: state.UsersPage.currentPage,

    }
}
let MapDispatchToProps = (dispatch) =>{
    return {
        follow:(userID)=>{
            let action = followAC(userID);
            dispatch(action);
        },
        unfollow:(userID)=>{
            let action = unfollowAC(userID);
            dispatch(action);
        },
        setusers:(users)=>{
            let action = SetUsersAC(users);
            dispatch(action);
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(SetPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(SetTotalUsersCountAC(totalCount));
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Users);