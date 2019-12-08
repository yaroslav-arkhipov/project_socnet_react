import React from 'react';
import s from '.././css/header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return <header className={s.header}>
        <img src="https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png" alt="logo" width="60 px" />
        <div className={s.loginbox}>
            {props.isAuth ? <div>{props.login} - <NavLink onClick={props.Logout}>Выход</NavLink></div>:
            <NavLink to={'/login'}>Логин</NavLink>}

        </div>
    </header>
}
export default Header;