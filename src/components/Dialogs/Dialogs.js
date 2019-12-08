import React from 'react';
import d from '.././css/dialogs.module.css'
import {NavLink, Redirect} from "react-router-dom";
import DialogsSend from './dialog-form';
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls";
import {maxLengthCreator, required} from "../../utils/validation/valid-form";


const DialogItem = (props) => {
    return (
        <div className={d.dialog + ' ' + d.active}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    );
}
const Message = (props) =>{
    return(
        <div className={d.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {

    let DialogElement = props.DialogData.map( d => <DialogItem name={d.name} id={d.id}/>);
    let MessagesElement = props.MessageData.map( m => <Message message={m.message}/>);
    let sendMessage = React.createRef();
    let newMessage =()=>{
        let text = sendMessage.current.value;
        props.newMessage(text);
        sendMessage.current.value ='';
    }

    let addNewMessage = (values) =>{
        props.newMessage(values.messageBody);
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                {DialogElement}
            </div>

            <div className={d.messages}>
                {MessagesElement}
                <div>
                <DialogsReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}

const DialogsForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Введите ваше сообщение"} name={"messageBody"} component={TextArea}
                   validate={[]}/>
        </div>
        <div>
            <button>Отправить</button>
        </div>
    </form>
    )
}

const DialogsReduxForm = reduxForm ({form: 'dialogAddMessageForm'})(DialogsForm);
export default Dialogs;