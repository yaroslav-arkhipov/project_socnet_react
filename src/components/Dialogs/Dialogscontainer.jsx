import React from 'react';
import {connect} from "react-redux";
import {sendMessageActionCreator, UpdateMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from './Dialogs';

let MapStateToProps = (state) =>{
    return {
        MessageData: state.DialogPage.MessagesData,
        DialogData: state.DialogPage.DialogData
    }
}
let MapDispatchToProps = (dispatch) =>{
    return {
        updatePostText:(text)=>{
            let action = UpdateMessageTextActionCreator(text);
            dispatch(action);
        },
        newMessage:(text)=>{dispatch(sendMessageActionCreator(text));}
    }
}
const DialogContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs);

export default DialogContainer;
