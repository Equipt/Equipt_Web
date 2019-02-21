import React from 'react';
import { Router, Route } from "react-router-dom";

import Alert from './Alert';
import Nav from './Nav';
import Home from './Home';
import Forgot from './Forgot';
import Login from './Login';
import Modal from './Modal';
import Signup from './Signup';
import Schedule from './Schedule';
import SportingGoodsIndex from './SportingGoods/Index';
import SportingGoodsShow from './SportingGoods/Show';

export default ({ history, store }) => {

  const protectedRoute = (ProtectedComponent, RedirectComponent = <Login/>) => {
    const { session } = store.getState();
    return session.authenticated ? ProtectedComponent : RedirectComponent;
  }

  return (
    <Router history={ history }>
      <div>
        <Nav/>
        <Alert/>
        <Modal/>
        <Route exact path="/" component={ () => protectedRoute(<SportingGoodsIndex/>, <Home/>) }/>
        <Route path="/login" component={ Login }/>
        <Route path="/signup" component={ Signup }/>
        <Route path="/forgot" component={ Forgot }/>
        <Route path="/sporting_goods" exact render={ props => protectedRoute(<SportingGoodsIndex { ...props }/>) }/>
        <Route path="/sporting_goods/:id" render={ props => protectedRoute(<SportingGoodsShow { ...props }/>) }/>
        <Route path="/schedule" render={ props => protectedRoute(<Schedule { ...props }/>) }/>
      </div>
    </Router>
  );
};
