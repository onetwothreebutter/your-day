import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import yourDayReducers from './App/stateManagement/reducers'


//import LoginButton from './App/components/login/LoginButton'
import DayRating from './App/components/dayRating/DayRating'

class App extends Component {

  render() {   
    const store = createStore(yourDayReducers)
    
    return (
      <Provider store={store}>
        <div className="App">
          <DayRating/>
        </div>
      </Provider>
    );
  }
}

export default App;
