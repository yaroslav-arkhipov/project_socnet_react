import React from 'react';
import Post from './posts/post'
import {reRender} from "../../../render";
import {addPostActionCreator, UpdatePostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let PostsElements = props.posts.map(p => <Post message={p.post} likecount={p.likecount}/>)
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
                <textarea onChange={PostChange} ref={newPostElement} value={props.newPost} ></textarea>
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