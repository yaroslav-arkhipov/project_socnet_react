import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let MapStateToPropsRedirect = (state) =>{
    return {
        isAuth: state.authUser.isAuth
    }
}

export const AuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render()
        {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>;
            return <Component {...this.props}/>
        }
    }
    let ConnectedwithAuthRedirect = connect(MapStateToPropsRedirect)(RedirectComponent);
    return ConnectedwithAuthRedirect;
}