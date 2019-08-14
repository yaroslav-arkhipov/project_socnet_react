import React from 'react';
import Post from './posts/post'
import {reRender} from "../../../render";
import {addPostActionCreator, UpdatePostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    console.log(props);
    let PostsElements = props.posts.ProfilePage.PostsData.map(p => <Post message={p.post} likecount={p.likecount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator(text));
    }
    let PostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(UpdatePostTextActionCreator(text));
    }
        return <div>
            post
            <div>
                <textarea onChange={PostChange} ref={newPostElement} value={props.newPost.ProfilePage.NewPostText} ></textarea>
            </div>
            <div>
                <button onClick={addPost}>Опубликоать</button>
            </div>
            <div>
                {PostsElements}
            </div>
        </div>
    }

export default MyPosts;