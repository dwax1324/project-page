import './css/index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './pages/Admin'
import Home from './pages/Home';
import Card from './components/Card';
import Projects from './pages/Projects'
import Upperbar from './components/Upperbar'
import About from './pages/About'
import Router from './Router'
import { HashRouter } from 'react-router-dom'


ReactDOM.render(
  <>
    <HashRouter>
      <Upperbar />
      <Router />
    </HashRouter>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
