import React from 'react';
import Profile from "./profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) (userID = 1);
        this.props.getUserProfile(userID);

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

let withDataURLComponent = withRouter(ProfileContainer);

export default connect(MapStateToProps, {getUserProfile}) (withDataURLComponent);