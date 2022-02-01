import './index.scss';

import React from 'react';
import App from './app/App';
import ReactDOM from 'react-dom';

import { StoresProvider } from './stores';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <StoresProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </StoresProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
