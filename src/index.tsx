import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Application } from './components/Application';
import { BASENAME_PATH } from './const';
import './index.css';
import { store } from './store';

render(
    <Router basename={BASENAME_PATH}>
        <Provider store={store}>
            <React.StrictMode>
                <Application />
            </React.StrictMode>
        </Provider>
    </Router>,
    document.querySelector('#root'),
);
