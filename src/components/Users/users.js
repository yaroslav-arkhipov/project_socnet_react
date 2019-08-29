import React from 'react';
import d from '.././css/users.module.css'
import  * as axios from "axios";
import UserPhoto from '../../images/user.png';

class Users extends React.Component{

                componentDidMount(){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.PageSize}`).then(response => {
                this.props.setusers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    setCurrentPage = (pageNumber)=> {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.PageSize}`).then(response => {
            this.props.setusers(response.data.items);
        });
    }
    render(){
                    let pagesCount = Math.ceil(this.props.totalCount / this.props.PageSize);
                    let pages = [];
                    for(let i=1;i<=pagesCount;i++){
                        pages.push(i);
                    }

        return <div>
            <div>{pages.map(p=>{

              return  <span className={this.props.currentPage === p && d.selectedPage} onClick={(e)=>{this.setCurrentPage(p);}}>{p}</span>

            })}</div>
            {
                this.props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                    <img src={ u.photos.small != null ? u.photos.small : UserPhoto } className={d.userphoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={()=>{this.props.unfollow(u.id)}}>Отписаться</button> :
                            <button onClick={()=>{this.props.follow(u.id)}}>Подписаться</button>}
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
}
export default Users;