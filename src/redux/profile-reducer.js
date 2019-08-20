const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT= 'UPDATE-POST-TEXT';

let initialState ={
    PostsData: [
        {id: 1, post: 'Привет пацаны', likecount: 11},
        {id: 2, post: 'Дароу', likecount: 15}
    ],
    NewPostText: '',
}

const profileReducer = (state = initialState, action) =>{

   switch (action.type) {
       case ADD_POST:{
           let newPost = {
               id: 3,
               post: action.postMessage,
               likecount: 0
           };
           let newstate = {...state};
           newstate.PostsData = [...state.PostsData];
           newstate.PostsData.push(newPost);
           newstate.NewPostText = '';
           return newstate;
   }
       case UPDATE_POST_TEXT:{
           let newstate = {...state};
           newstate.NewPostText=action.newText;
           return newstate;
       }
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