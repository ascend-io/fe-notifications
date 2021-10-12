import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
  This section uses React
 */

// import App from './Prototype/App';
import App from './WithReact/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
  To write vanilla JS, edit index.html, add a link to a script file under /public, and start working!
 */
