import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from '../src/components/containers/app';
import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'),
);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}
