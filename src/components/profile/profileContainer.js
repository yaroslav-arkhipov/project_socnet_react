import React from 'react';
import Profile from "./profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../api/api";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) (userID = 1);
        this.props.getUserProfile(userID);
        setTimeout(()=>{this.props.getStatus(userID);},1000);
    }

    render() {
    return(
<div>
<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
</div>
    )
}
}
let MapStateToProps = (state) => ({
profile: state.ProfilePage.profile,
status: state.ProfilePage.status
})

let withDataURLComponent = withRouter(ProfileContainer);

export default connect(MapStateToProps, {getUserProfile, getStatus, updateStatus}) (withDataURLComponent);