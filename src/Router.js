import React from 'react';
import { Router, Route, Switch } from "react-router-dom";

import Alert from './Alert';
import Nav from './Nav';
import Home from './Home';
import Forgot from './Forgot';
import Login from './Login';
import Modal from './Modal';
import Signup from './Signup';
import Schedule from './Schedule';
import SportingGoodsIndex from './SportingGoods/Index';
import SportingGoodsNew from './SportingGoods/New';
import SportingGoodsShow from './SportingGoods/Show';
import RentalsShow from './Rentals/Show';
import NotFound from './NotFound';

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
        <Switch>
          <Route exact path="/" component={ () => protectedRoute(<SportingGoodsIndex/>, <Home/>) }/>
          <Route path="/login" component={ Login }/>
          <Route path="/signup" component={ Signup }/>
          <Route path="/forgot" component={ Forgot }/>
          <Route path="/sporting_goods/:slug/rentals/:hash" render={ props => protectedRoute(<RentalsShow { ...props }/>) }/>
          <Route path="/sporting_goods" exact render={ props => protectedRoute(<SportingGoodsIndex { ...props }/>) }/>
          <Route path="/sporting_goods/new" render={ props => protectedRoute(<SportingGoodsNew { ...props }/>) }/>
          <Route path="/sporting_goods/:slug" render={ props => protectedRoute(<SportingGoodsShow { ...props }/>) }/>
          <Route path="/schedule" render={ props => protectedRoute(<Schedule { ...props }/>) }/>
          <Route path="/not_found" component={ NotFound }/>
        </Switch>
      </div>
    </Router>
  );
};
