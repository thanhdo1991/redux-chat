import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'

import './index.css';
import './main.css';

var redux = require('redux');

// const store = createStore(reducer)

const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension? window.devToolsExtension(): f => f
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
