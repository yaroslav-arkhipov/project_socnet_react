import React from 'react';
import c from '.././css/profile.module.css';
import Preloader from "../common/preloader";
import d from "../css/users.module.css";
import lookAJobT from "../../images/1428321186_1719813647.gif";
import lookAJobF from "../../images/1_f-sik5lykdbhcHdsr4Zt0Q.gif"


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return  <div className={c.profile}>
    <div>
      <p>{props.profile.fullName}</p>
      <img src={props.profile.photos.large} />
      <p>{props.profile.aboutMe}</p>
        <img src={ props.profile.lookingForAJob == true ? lookAJobT  : lookAJobF } width='150px'/>

        <p>{props.profile.lookingForAJob == true ? 'Ищу работу'  : 'Не ищу работу'}</p>
        <p>{props.profile.lookingForAJobDescription}</p>
    </div>

  </div>
}
export default ProfileInfo;