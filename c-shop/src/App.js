import React, { Fragment, Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Home from './templates/Home';
import Login from './templates/Login';
import SignUp from './templates/SignUp';
import Profile from './templates/Profile';
import Products from './templates/Products';
import DetailsProduct from './templates/DetailsProduct';
import ShoppingCart from './templates/ShoppingCart';
import Checkout from './templates/Checkout';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header/>
          <Route exact path="/" component={ Home }></Route>
          <Switch>
            <Route exact path="/login" component={ Login }></Route>
            <Route exact path="/signup" component={ SignUp }></Route>
            <Route exact path="/profile" component={ Profile }></Route>
            <Route exact path="/products" component={ Products }></Route>
            <Route exact path="/products/:id" component={ DetailsProduct }></Route>
            <Route exact path="/cart" component={ ShoppingCart }></Route>
            <Route exact path="/checkout" component={ Checkout }></Route>
          </Switch>
          <Footer/>
        </Fragment>
      </Router>
    );
  }
}

export default App;
