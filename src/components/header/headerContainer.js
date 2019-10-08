import React from 'react';
import Header from "./header";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserAuthDataAC} from "../../redux/auth-reducer";
import {authMe} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.getUserAuthDataAC();

    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) =>({
    isAuth: state.authUser.isAuth,
    login: state.authUser.login
});
export default connect (mapStateToProps, {getUserAuthDataAC}) (HeaderContainer);