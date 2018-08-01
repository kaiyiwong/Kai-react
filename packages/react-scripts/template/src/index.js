import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './fonts.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  React.createElement(BrowserRouter, { basename: '/' }, React.createElement(App)),
  document.getElementById('root'),
);
serviceWorker.unregister();
