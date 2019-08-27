import React from 'react';
import d from '.././css/users.module.css'
import  * as axios from "axios";
import UserPhoto from '../../images/user.png';

let Users = (props) => {
    let getUsers= () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setusers(response.data.items);
            });
        }
    }
    return <div>
        <button onClick={getUsers}>Список пользователей</button>
        {
            props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                    <img src={ u.photos.small != null ? u.photos.small : UserPhoto } className={d.userphoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={()=>{props.unfollow(u.id)}}>Отписаться</button> :
                            <button onClick={()=>{props.follow(u.id)}}>Подписаться</button>}
                    </div>
                </span>
                <span>
                     <span>
                         <div>{u.name}</div>
                         <div>{u.status}</div>
                     </span>
                     <span>
                         <div>{"u.location.country"}</div>
                         <div>{"u.location.city"}</div>
                     </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;