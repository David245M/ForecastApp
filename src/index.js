import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import './style.css'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
