import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../reducers/root';
import Main from '../containers/Main';
import '../css/root.css';

const store = createStore(rootReducers);

class Root extends Component {
  render() {
    return (
      <Provider store={ store } >
        <Main />
      </Provider>
    );
  }
}

export default Root;
