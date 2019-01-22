import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';

import App from './containers/App/App';
import history from './services/history';

const rootElement = document.createElement('div');

rootElement.id = 'root';

document.body.appendChild(rootElement);

ReactDOM.render(
    <Router history={history}>
        <Route path='/' component={App} />
    </Router>
    , rootElement);
