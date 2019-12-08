import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {getUserAuthDataAC, Logout} from "../../redux/auth-reducer";

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
export default connect (mapStateToProps, {getUserAuthDataAC, Logout}) (HeaderContainer);