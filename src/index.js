import React from 'react';
import ReactDOM from 'react-dom';
import './functionBased/App.css';
import {
  BrowserRouter,
} from 'react-router-dom';

import App from './functionBased/components/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
