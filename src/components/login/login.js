import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Login} from '../../redux/auth-reducer';
import {Redirect} from "react-router-dom";
import Preloader from "../common/preloader";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"E-mail"} name={"email"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Пароль"} name={"password"} component={"input"} type={"password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> Запомнить меня
            </div>
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm)

const LoginF = (props) => {
    const onSubmit = (formData) =>{
        props.Login(formData.email, formData.password, formData.rememberme);
        if (props.isAuth===false){
            return <Preloader/>
        }
    }

    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) =>({
    isAuth: state.authUser.isAuth
})
export default connect(mapStateToProps, {Login}) (LoginF);