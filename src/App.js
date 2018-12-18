import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import yourDayReducers from './App/stateManagement/reducers'


//import LoginButton from './App/components/login/LoginButton'
import DayRatingEl from './App/components/dayRating/DayRatingEl'

class App extends Component {

  render() {   
    const store = createStore(yourDayReducers)
    
    return (
      <Provider store={store}>
        <div className="App">
          <DayRatingEl/>
        </div>
      </Provider>
    );
  }
}

export default App;
