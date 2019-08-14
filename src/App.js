import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Nav from './components/nav/nav.js';
import Profile from './components/profile/profile';
import Dialogs from './components/Dialogs/Dialogs';
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import Music from "./components/music/music";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render = { () => <Dialogs 
                dialog={props.state} 
                message={props.state} 
                dispatch={props.dispatch} 
                newMessage={props.state}/>} />
                <Route path='/profile' render = { ()=> <Profile 
                posts = {props.state} 
                dispatch={props.dispatch} 
                newPost={props.state} />} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>
        </div>

    );
}

export default App;
