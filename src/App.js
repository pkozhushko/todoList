import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './reducers/root';
import Root from './components/Root';

const store = createStore(rootReducers);

class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <Root />        
      </Provider>
    );
  }
}

export default App;
