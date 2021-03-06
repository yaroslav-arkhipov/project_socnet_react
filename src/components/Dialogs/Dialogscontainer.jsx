import React from 'react';
import {connect} from "react-redux";
import {sendMessageActionCreator, UpdateMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from './Dialogs';
import {Redirect} from "react-router-dom";
import {AuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

let MapStateToProps = (state) =>{
    return {
        MessageData: state.DialogPage.MessagesData,
        DialogData: state.DialogPage.DialogData,
    }
}

let MapDispatchToProps = (dispatch) =>{
    return {
        newMessage:(text)=>{dispatch(sendMessageActionCreator(text));}
    }
}



const DialogContainer = compose(
    connect(MapStateToProps, MapDispatchToProps)
)
(Dialogs);

export default DialogContainer;
