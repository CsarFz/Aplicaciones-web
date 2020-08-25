import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header'
import Home from './templates/Home'

function App() {
  return (
    <Router>
      <Fragment>
        <Header/>
        <Route exact path="/" component={Home}></Route>
      </Fragment>
    </Router>
  );
}

export default App;
