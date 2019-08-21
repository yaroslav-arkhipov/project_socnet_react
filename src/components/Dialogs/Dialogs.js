import React from 'react';
import d from '.././css/dialogs.module.css'
import {NavLink} from "react-router-dom";

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
    let MessageChange = () =>{
        let text = sendMessage.current.value;
        props.updatePostText(text);
    }
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                {DialogElement}
            </div>

            <div className={d.messages}>
                {MessagesElement}
                <div className={d.messagebox}>
                    <textarea  className={d.messagebox} onChange={MessageChange} ref={sendMessage} value={props.NewMessageText} placeholder="Введите ваше сообщение"></textarea>
                    <div>
                        <button onClick={newMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;