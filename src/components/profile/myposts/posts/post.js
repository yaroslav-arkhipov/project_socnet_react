import React from 'react';
import c from '../../.././css/post.module.css';
const Post = (props) => {

    return   (
<div className={c.item}>
<img  src='https://cdn.vox-cdn.com/thumbor/z8FcY59yNu-KTojIn_IBIvKHpfU=/0x0:1280x800/1200x800/filters:focal(538x298:742x502)/cdn.vox-cdn.com/uploads/chorus_image/image/61953275/avatar.0.png'/>
        {props.message}
        <div>
        <span>like {props.likecount}</span>
        </div>
</div>
    
    ); 
}
export default Post;