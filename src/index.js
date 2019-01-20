import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import yourDayReducers from './App/stateManagement/reducers';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const store = createStore(yourDayReducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));