import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import "normalize.css";
import './index.scss';

import createStore from "./store/createStore";

import {Provider} from "react-redux";
import {AppContainer} from "react-hot-loader";
import HomeContainer from "./containers/HomeContainer";

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={createStore()}>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(HomeContainer);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
