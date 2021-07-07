import './css/index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './pages/Admin'
import Home from './Home';
import Card from './components/Card';
import Projects from './pages/Projects'
import Upperbar from './components/Upperbar'
import About from './pages/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


ReactDOM.render(
  <>

    <Router>

      <Upperbar />
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/card">
        <Card />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>


    </Router>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
