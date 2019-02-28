import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import './src/styles/index.css';
import './src/styles/normalize.css';
import App from './src/App';
import rootreduser from './src/redux/reducers/index';

const store = createStore(
  rootreduser,
  composeWithDevTools(applyMiddleware(thunk),
    window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : f => f),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
