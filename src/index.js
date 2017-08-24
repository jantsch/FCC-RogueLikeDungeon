import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './containers/c-app';
import {Provider} from 'react-redux'
import storeFactory from './store/store'

const store = storeFactory()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

