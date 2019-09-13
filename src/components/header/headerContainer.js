import React from 'react';
import Header from "./header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserAuthDataAC} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {Id, email, login} = response.data.data;
                console.log(response.data.data);
                this.props.setUserAuthDataAC(Id, email, login);
            }

        });
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) =>({
    isAuth: state.authUser.isAuth,
    login: state.authUser.login
});
export default connect (mapStateToProps, {setUserAuthDataAC}) (HeaderContainer);