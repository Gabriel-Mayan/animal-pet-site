import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import App from './app/App';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { StoresProvider } from './stores';

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
