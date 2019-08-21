const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState ={
    MessagesData: [
        {id: 1, message: 'Привет мелкая'},
        {id: 2, message: 'Как дела?'},
        {id: 3, message: 'Жопка'},
    ],
    NewMessageText: '',
    DialogData: [
        {id: 1, name: 'Ника'},
        {id: 2, name: 'Димыч'},
        {id: 3, name: 'Кирилл'},
        {id: 4, name: 'Вовас'},
        {id: 5, name: 'Левыч'}
    ],
}


const dialogReducer = (state = initialState, action) =>{
 switch (action.type){
     case ADD_MESSAGE: {
         let newMessage = {id: 4, message: action.newMessage};
         return {...state,
         MessagesData: [...state.MessagesData, newMessage],
         NewMessage : ''
     }
     }
     case UPDATE_MESSAGE_TEXT:
         return {...state,
             NewMessageText: action.newText}
     default: return state;
 }
}
export const sendMessageActionCreator = (text) =>{
    return{
        type:ADD_MESSAGE, newMessage: text
    }
}
export const UpdateMessageTextActionCreator = (text) =>{
    return{
        type: UPDATE_MESSAGE_TEXT, newText: text
    }
}

export default dialogReducer;