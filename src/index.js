import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import DisplayRegisterPageReducer from './reducers/displayregisterpagereducer';
import displayloginReducer from './reducers/displayloginreducer';
import loggedinReducer from './reducers/loggedinReducer';
import displayusername from './reducers/displayusername';


const store = configureStore({
    reducer:{
        DisplayRegisterPage: DisplayRegisterPageReducer,
        DisplayLogin:displayloginReducer,
        LoggedIn:loggedinReducer,
        DisplayUsername:displayusername
    }
})

ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById('root'));
