import 'core-js/fn/object/assign';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, HashRouter } from 'react-router-dom';

import App from './app';

// Render the main component into the dom

const renderEl = process.env.NODE_ENV === 'development'
  ? (
    <HashRouter>
      <App />
    </HashRouter>
  ) : (
    <BrowserRouter basename='/activity/replace_your_base_name'>
      <App />
    </BrowserRouter>
  )

ReactDOM.render(renderEl, document.getElementById('app'))
