import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Nav from './components/nav/nav.js';
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import Music from "./components/music/music";
import DialogContainer from "./components/Dialogs/Dialogscontainer";
import UsersContainer from "./components/Users/userscontainer";
import ProfileContainer from "./components/profile/profileContainer";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render = { () => <DialogContainer />} />
                <Route path='/profile' render = { ()=> <ProfileContainer />} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
                <Route path='/users' component={UsersContainer} />
            </div>
        </div>

    );
}

export default App;
