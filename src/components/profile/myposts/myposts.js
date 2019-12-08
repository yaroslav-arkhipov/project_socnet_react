import React from 'react';
import Post from './posts/post';
import {Field, reduxForm} from "redux-form";
import required from '../../../utils/validation/valid-form'
import {TextArea} from "../../common/FormsControls";



const requiredVar = required;

const MyPosts = (props) => {
    let PostsElements = props.PostsData.map(p => <Post message={p.post} likecount={p.likecount}/>)
    let newPostElement = React.createRef();
    let addNewPost = (values) =>{
        props.addPost(values.newPostText);
    }
        return (
            <div>
            <NewPostReduxForm onSubmit={addNewPost}/>

            {PostsElements}
</div>
    )
    }

    const NewPost = (props) =>{
      return (
          <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Введите текст поста" name={"newPostText"} component={TextArea} validate={[]}/>
            </div>
            <div>
                <button>Опубликовать</button>
            </div>
        </form>
      )
    }
const NewPostReduxForm = reduxForm ({form: 'newPostAddForm'})(NewPost);
export default MyPosts;