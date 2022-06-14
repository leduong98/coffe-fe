import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./landingpage/Home";
import Admin from "./dashboard/Admin";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./landingpage/header/Header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Header />
    </Router>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/admin/login" component={Admin}/>
      </Switch>
    </Router>
  </>
);

reportWebVitals();
