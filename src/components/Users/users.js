import React from 'react';
import d from "../css/users.module.css";
import UserPhoto from '../../images/user.png';
import {NavLink} from "react-router-dom";

let Users = (props) =>{
    let pagesCount = Math.ceil(props.totalCount / props.PageSize);
    let pages = [];
    for(let i=1;i<=pagesCount;i++){
        pages.push(i);
    }
   return <div>
        <div>{pages.map(p=>{

            return  <span className={props.currentPage === p && d.selectedPage} onClick={(e)=>{props.setCurrentPage(p);}}>{p}</span>

        })}</div>
        {
            props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+u.id}>
                    <img src={ u.photos.small != null ? u.photos.small : UserPhoto } className={d.userphoto}/>
                        </NavLink>
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