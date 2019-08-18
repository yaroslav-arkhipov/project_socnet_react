import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import StoreContext from './ContextApp';

let reRender =()=>{
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
}
reRender();
store.subscribe(reRender);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
