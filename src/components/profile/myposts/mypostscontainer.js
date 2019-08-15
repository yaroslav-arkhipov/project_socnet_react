import React from 'react';
import {addPostActionCreator, UpdatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from './myposts';

const MyPostsContainer = (props) => {
    let addPost = (text) => {
        props.dispatch(addPostActionCreator(text));
        //props.addPost(text);
    }
    let PostChange = (text) =>{
        let action = UpdatePostTextActionCreator(text);
        props.dispatch(action);
        //props.updatePostText(text);
    }
        return <div>
            <MyPosts updatePostText={PostChange} addPost={addPost} posts = {props.posts} newPost={props.newPost}/>
        </div>
    }

export default MyPostsContainer;