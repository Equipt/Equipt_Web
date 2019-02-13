import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import Api from './../../Api.js';

import Component from './index.js';
import Wrapper from './components/Wrapper';
import Tile from './components/Tile';
import Filter from './components/Filter';

const history = createHistory();
const api = new Api();
const thunkMiddleware = thunk.withExtraArgument({ api, history });
const mockStore = configureMockStore([ thunkMiddleware ]);

const data = {
  sportingGoods: {
    results: [
      {
        slug: 'item-one',
        title: 'Item One'
      }, {
        slug: 'item-two',
        title: 'Item Two'
      }, {
        slug: 'item-three',
        title: 'Item Three'
      }
    ],
    total: 0
  }
};

const store = mockStore(data);

const wrapper = mount(
  <Provider store={ store }>
    <Component/>
  </Provider>
);

describe('Wrapper', () => {

  it('Should display the right amount of Sporting Good Tile', () => {
    expect(wrapper.find(Tile).length).toBe(3);
  });

  it('Should display a Filter Component', () => {
    expect(wrapper.find(Filter).length).toBe(1);
  });

});

describe('Tile', () => {

  const firstTile = wrapper.find(Tile).first();
  const actualSportingGood = data.sportingGoods.results[0];

  it('Should contain the right title', () => {
    expect(firstTile.find('h4').text()).toBe(actualSportingGood.title);
  });

});
