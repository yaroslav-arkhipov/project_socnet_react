import React from 'react';
import Profile from "./profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);

        });
    }

    render() {
    return(
<div>
<Profile {...this.props} profile={this.props.profile}/>
</div>
    )
}
}
let MapStateToProps = (state) => ({profile: state.ProfilePage.profile})
export default connect(MapStateToProps, {setUserProfile}) (ProfileContainer);