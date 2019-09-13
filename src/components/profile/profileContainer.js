import React from 'react';
import Profile from "./profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) (userID = 1);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID).then(response => {
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

let withDataURLComponent = withRouter(ProfileContainer);

export default connect(MapStateToProps, {setUserProfile}) (withDataURLComponent);