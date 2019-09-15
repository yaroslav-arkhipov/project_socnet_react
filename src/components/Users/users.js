import React from 'react';
import d from "../css/users.module.css";
import UserPhoto from '../../images/user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                            <button onClick={()=>{
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials:true,
                                headers: {"API-KEY": "379b7cbb-784d-43e8-9e3f-e087aca37ae9"}
                                }).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id);
                                    }
                                });
                                }}>Отписаться</button> :
                            <button onClick={()=>{
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {withCredentials:true,
                                    headers: {"API-KEY": "379b7cbb-784d-43e8-9e3f-e087aca37ae9"}
                                }).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id);
                                    }
                                    });
                            }}>Подписаться</button>}
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