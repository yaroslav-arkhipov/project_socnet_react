const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogReducer = (state, action) =>{
 switch (action.type){
     case ADD_MESSAGE: let newMessage = {
         id: 4,
         message: action.Message,
     };
         state.MessagesData.push(newMessage);
         state.NewMessageText='';
         return state;
     case UPDATE_MESSAGE_TEXT:
         state.NewMessageText=action.newText;
         return state;
     default: return state;
 }
}

export default dialogReducer;