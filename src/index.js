import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import storyReducer from './reducers/storyReducer';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const Store = createStore(storyReducer);

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root'));
