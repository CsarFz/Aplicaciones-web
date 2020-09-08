import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from './components/Header';
import Home from './templates/Home';
import Login from './templates/Login';
import SignUp from './templates/SignUp';
import Profile from './templates/Profile';
import Products from './templates/Products';
import DetailsProduct from './templates/DetailsProduct';
import ShoppingCart from './templates/ShoppingCart';
import Checkout from './templates/Checkout';
import NotFound from './templates/NotFound';
import Footer from './components/Footer';

import Providers from './contexts';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <Providers>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/products" component={Products}></Route>
            <Route exact path="/products/:id" component={DetailsProduct}></Route>
            <Route exact path="/cart" component={ShoppingCart}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <Route path="*" component={NotFound} >
              <NotFound />
            </Route>
          </Switch>
          <Footer />
          <ToastContainer/>
        </Fragment>
      </Router>
    </Providers>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  const user = localStorage.getItem('user');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (children) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}