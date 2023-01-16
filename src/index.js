import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './functionBased/components//TodoContainer';


import './functionBased/App.css'
// import { BrowserRouter, Routes } from 'react-router-dom';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './functionBased/components/App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
           <App /> 
        </BrowserRouter>
    </React.StrictMode>
    ,document.getElementById('root'));