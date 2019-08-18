import React from 'react';
import {addPostActionCreator, UpdatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from './myposts';
import StoreContext from '../../../ContextApp';

const MyPostsContainer = (props) => {
        return (
        <StoreContext.Consumer> 
        {
         (store) => {
        let addPost = (text) => {
            store.dispatch(addPostActionCreator(text));
        //props.addPost(text);
        }
        const PostChange = (text) =>{
        let action = UpdatePostTextActionCreator(text);
        store.dispatch(action);
        //props.updatePostText(text);
        }  

            return <MyPosts updatePostText={PostChange} addPost={addPost} posts = {store.getState().ProfilePage.PostsData} newPost={store.getState().ProfilePage.NewPostText}/>
        
        }

    }
    </StoreContext.Consumer>
    );
    }


export default MyPostsContainer;