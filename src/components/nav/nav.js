import React from 'react';
import c from '.././css/nav.module.css';
import {NavLink} from "react-router-dom";
import FriendsBox from "../FriendsBox/friendsbox";

const Nav = (props) => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to="/profile" activeClassName={c.activeLink} > Профиль</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/news" activeClassName={c.activeLink} >Новости</NavLink>
            </div>
            <div className={c.item}>
                <img src='https://img.lovepik.com/element/40033/8268.png_860.png'/>
                <NavLink to="/dialogs" activeClassName={c.activeLink}>Сообщения</NavLink>
            </div>
            <div className={c.item}>

                <NavLink to="/music" activeClassName={c.activeLink}>Музыка</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/settings" activeClassName={c.activeLink}>Настройки</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/users" activeClassName={c.activeLink}>Пользователи</NavLink>
            </div>

        </nav>
    );
}
export default Nav;