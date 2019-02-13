import React from 'react';
import { Router, Route } from "react-router-dom";

import Alert from './Alert';
import Nav from './Nav';
import Home from './Home';
import Loading from './Loading';
import Login from './Login';
import Signup from './Signup';
import SportingGoodsIndex from './SportingGoods/Index';

export default ({ history, store }) => {

  const protectedRoute = ProtectedComponent => {
    const { session } = store.getState();
    return session.authenticated ? <ProtectedComponent/> : <Login/>
  }

  return (
    <Router history={ history }>
      <div>
        <Nav/>
        <Alert/>
        <Loading/>
        <Route exact path="/" component={ Home }/>
        <Route path="/login" component={ Login }/>
        <Route path="/signup" component={ Signup }/>
        <Route path="/sporting_goods" render={ () => protectedRoute(SportingGoodsIndex) }/>
      </div>
    </Router>
  );
};
