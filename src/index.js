import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import { Countercontext } from './Countercontext/Countercontext';
import { BrowserRouter,HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
       <App />
    </Provider>
    
    
    </BrowserRouter>
      
    
  // </React.StrictMode>
);

reportWebVitals();
