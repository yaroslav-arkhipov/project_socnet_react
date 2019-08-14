import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let store ={
    _state: {
       
        DialogData: [
            {id: 1, name: 'Ника'},
            {id: 2, name: 'Димыч'},
            {id: 3, name: 'Кирилл'},
            {id: 4, name: 'Вовас'},
            {id: 5, name: 'Левыч'}
        ],
        MessagesData: [
            {id: 1, message: 'Привет мелкая'},
            {id: 2, message: 'Как дела?'},
            {id: 3, message: 'Жопка'},
        ],
        NewPostText: 'Опубликовать пост...',
        NewMessageText: 'Отправить сообщение...'
    },
    getState(){
        return this._state;
    },
    reRender(){
        
    },
    subscribe (observer) {
        this.reRender = observer;
    },
    _addPost (postMessage){
        let newPost = {
            id: 3,
            post: postMessage,
            likecount: 0
        };
        this._state.PostsData.push(newPost);
        this._state.NewPostText='';
        this.reRender(this._state);
    },
    _UpdatePostText (newText){

        this._state.NewPostText=newText;
        this.reRender(this._state);
    },

    _addMessage(Message){
        let newMessage = {
            id: 4,
            message: Message,
        };
        this._state.MessagesData.push(newMessage);
        this._state.NewMessageText='';
        this.reRender(this._state);
    },

    _UpdateMessageText (newText){

        this._state.NewMessageText=newText;
        this.reRender(this._state);
    },
dispatch(action) {

    profileReducer(this._state, action);
    dialogReducer(this._state, action);
    this.reRender(this._state);
}
}



export default store;
window.store=store;