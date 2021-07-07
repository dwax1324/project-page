import './css/index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './pages/Admin'
import App from './App';
import Card from './components/Card';
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
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/card">
        <Card />
      </Route>

    </Router>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
