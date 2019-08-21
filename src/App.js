import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Nav from './components/nav/nav.js';
import Profile from './components/profile/profile';
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import Music from "./components/music/music";
import DialogContainer from "./components/Dialogs/Dialogscontainer";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render = { () => <DialogContainer />} />
                <Route path='/profile' render = { ()=> <Profile />} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>
        </div>

    );
}

export default App;
