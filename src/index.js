import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles.css';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}
