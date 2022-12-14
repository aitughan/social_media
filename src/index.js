import React from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import App from './App';
import {Provider} from "react-redux"


ReactDom.render(
        <BrowserRouter>
            <Provider  store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
)




