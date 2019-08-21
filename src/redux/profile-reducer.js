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
           let newPost = {id: 3, post: action.postMessage, likecount: 0};
           return {...state,
           PostsData:[...state.PostsData, newPost],
           NewPostText : ''
       }
   }
       case UPDATE_POST_TEXT:{
           return {...state,
               NewPostText: action.newText}
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