import React from 'react';
import d from '.././css/users.module.css'

let Users = (props) =>{

    if (props.users.length === 0) {
        props.setusers([
            {
                id: 1,
                followed: false,
                photoURL: 'https://sun1.dataix-kz-akkol.userapi.com/c848628/v848628674/1a289d/PCwqhX6ouL0.jpg?ava=1',
                name: 'Архипов Я.',
                status: 'Я босс!',
                location: {country: 'Казахстан', city: 'Алматы'}
            },
            {
                id: 2,
                followed: true,
                photoURL: 'https://sun1.dataix-kz-akkol.userapi.com/c851216/v851216899/1989a7/u1K7bSUvztI.jpg?ava=1',
                name: 'Архипова В.',
                status: 'Пипка!',
                location: {country: 'Россия', city: 'Братск'}
            },
            {
                id: 3,
                followed: false,
                photoURL: 'https://media.tvzvezda.ru/news/vstrane_i_mire/content/201812121749-vhok.htm/1.jpg',
                name: 'Купринов Д..',
                status: 'Ищу работу!',
                location: {country: 'Россия', city: 'Москва'}
            },
            {
                id: 4,
                followed: true,
                photoURL: 'https://images11.domashnyochag.ru/upload/img_cache/74f/74f6e224fdafc28464c1a215f781182b_ce_1072x595x114x73_cropped_930x510.jpg',
                name: 'Михайлов В..',
                status: 'Отпуск!',
                location: {country: 'Казахстан', city: 'Алматы'}
            },

        ])
    }
    return <div>
        {
            props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                    <img src={u.photoURL} className={d.userphoto}/>
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
                         <div>{u.location.country}</div>
                         <div>{u.location.city}</div>
                     </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;