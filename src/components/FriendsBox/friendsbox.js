import React from 'react';
import c from '.././css/friendsbox.module.css';


const FriendsBox = (props) => {
    let div = <>
        <div className={c.sidebar}>
            Друзья
            <table>
                <tl>
                    <td>
                        <img
                            src='http://komotoz.ru/kartinki/zhivotnye/images/kartinki_volka_na_avu/kartinki_volka_na_avu_02.jpg'/>
                    </td>
                </tl>
            </table>
        </div>
    </>;
}
export default FriendsBox;