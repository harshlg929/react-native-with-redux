import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import roomReducer from './src/reducers/roomReducer';
import AppNavigator from './src/AppNavigator';

const store = createStore(roomReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store } >
        <AppNavigator />
      </Provider>
    );
  }
}