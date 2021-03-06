import React from 'react';
import {connect} from "react-redux";
import {addPostActionCreator, UpdatePostTextActionCreator} from "../../redux/profile-reducer";
import {
    followAC,
    SetUsersAC,
    unfollowAC,
    SetPageAC,
    SetTotalUsersCountAC,
    SetIsFetchingAC,
    getUsersThunkCreator
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./users";
import preloader from '../../images/preloader.svg';
import Preloader from "../common/preloader";
import {getUsers} from "../../api/api";

export class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.PageSize);
    }

    setCurrentPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.PageSize);

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
            totalCount={this.props.totalCount}
            PageSize={this.props.PageSize}
            currentPage={this.props.currentPage}
            setCurrentPage={this.setCurrentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}/>
        </>
    }
}

let MapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        PageSize: state.UsersPage.PageSize,
        totalCount: state.UsersPage.totalCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            let action = followAC(userID);
            dispatch(action);
        },
        unfollow: (userID) => {
            let action = unfollowAC(userID);
            dispatch(action);
        },
        setusers: (users) => {
            let action = SetUsersAC(users);
            dispatch(action);
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(SetTotalUsersCountAC(totalCount));
        },
        setIsFetching: (isFetching) => {
            dispatch(SetIsFetchingAC(isFetching));
        },


    }
}

export default connect(MapStateToProps, {MapDispatchToProps, getUsers: getUsersThunkCreator})(UsersAPIComponent);
