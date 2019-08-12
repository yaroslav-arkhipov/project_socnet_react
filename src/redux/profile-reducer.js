const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT= 'UPDATE-POST-TEXT';

const profileReducer = (state, action) =>{
   switch (action.type){
       case ADD_POST: let newPost = {
           id: 3,
           post: action.postMessage,
           likecount: 0
       };
           state.PostsData.push(newPost);
           state.NewPostText='';
           return state;
       case UPDATE_POST_TEXT: state.NewPostText=action.newText;
           return state;
       default: return state;
   }

}
export const addPostActionCreator = (text) =>{
    return{
        type:ADD_POST, postMessage: text
    }
}
export const UpdatePostTextActionCreator = (text) =>{
    return{
        type: UPDATE_POST_TEXT, newText: text
    }
}

export default profileReducer;