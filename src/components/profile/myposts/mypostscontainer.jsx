import React from 'react';
import {addPostActionCreator, UpdatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from './myposts';
import {connect} from "react-redux";

let MapStateToProps = (state) =>{
   return {
       PostsData: state.ProfilePage.PostsData,
       NewPostText: state.ProfilePage.NewPostText
   }
}
let MapDispatchToProps = (dispatch) =>{
    return {
        updatePostText:(text)=>{
            let action = UpdatePostTextActionCreator(text);
            dispatch(action);
            },
        addPost:(text)=>{dispatch(addPostActionCreator(text));}
    }
}


const PostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default PostsContainer;