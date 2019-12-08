import React from 'react';
import d from "../css/dialogs.module.css";
import {Field, reduxForm} from "redux-form";



const DialogsSend = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData);
    }
    return <div>
        <dialogsReduxform onSubmit={onSubmit}/>
    </div>
}

export default DialogsSend;