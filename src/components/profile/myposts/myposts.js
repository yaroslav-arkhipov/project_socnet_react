import React from 'react';
import Post from './posts/post'

const MyPosts = (props) => {
    console.log(props);
    let PostsElements = props.posts.map(p => <Post message={p.post} likecount={p.likecount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    let PostChange = () =>{
        let text = newPostElement.current.value;
        props.updatePostText(text);
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