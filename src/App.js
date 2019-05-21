import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, compose, applyMiddleware } from 'redux';
import algoliasearch from 'algoliasearch';
import { sessionService } from 'redux-react-session';
import thunk from 'redux-thunk';
import { StyleRoot } from 'radium';
import Api from './Api.js';
import './App.css';

import reducer from './reducer.js';
import Router from './Router.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a browser history
const history = createHistory();

const api = new Api(history);

// Algolia Setup
const algoliaClient = algoliasearch(
  process.env.REACT_APP_AGOLIA_ID,
  process.env.REACT_APP_AGOLIA_SEARCH_ONLY_KEY
);

const algolia = algoliaClient.initIndex(process.env.REACT_APP_AGOLIA_INDICE);

// Thunk Setup
const thunkMiddleware = thunk.withExtraArgument({ api, history, algolia });

// Store Setup
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

api.store = store;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    sessionService.initSessionService(store, { driver: 'COOKIES' })
    .then(() => this.setState({ loaded: true }));
  }

  render() {
    const { loaded } = this.state;

    return loaded ? (
      <Provider store={ store }>
        <StyleRoot>
          <Router history={ history } store={ store }/>
        </StyleRoot>
      </Provider>
    ) : null

  }
}

export default App;
