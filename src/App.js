import React, { Component } from 'react';
import Auth from './App/utils/Auth';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import AppCss from './App/styles/AppStyles'
import SecretRoute from './App/utils/SecretRoute'
import HomePage from './App/pages/HomePage'
import LoginPage from './App/pages/LoginPage'
import DayRatingPage from './App/pages/DayRatingPage'
import RatingHistoryPage from './App/pages/RatingHistoryPage'
import HappiestCompanies from './App/pages/HappiestCompanies'
import Callback from './App/components/Callback/Callback'
import { createStore } from 'redux'
import yourDayReducers from './App/stateManagement/reducers'
import PublicRoute from "./App/utils/PublicRoute";

const auth = new Auth();

class App extends Component {

  constructor(props){
    super(props);

  }

  render() {
    const store = createStore(yourDayReducers)
    
    return (
      <Router>
        <Provider store={store}>
          <AppCss>
            <Switch>
              <SecretRoute path="/rate-day" myComponent={DayRatingPage} auth={auth}/>
              <SecretRoute path="/rating-history" myComponent={RatingHistoryPage} auth={auth}/>
              <SecretRoute path="/dashboard" myComponent={HomePage} auth={auth}/>

              <Route path="/login" render={(routerProps) => <LoginPage {...routerProps} auth={auth} /> } />
              <Route exact path='/callback' render={() => (
                <Callback auth={auth}/>
              )}/>

              <PublicRoute path="/happiest-companies" myComponent={HappiestCompanies} auth={auth}/>
              <PublicRoute path="/home" myComponent={HomePage} auth={auth}/>
              <PublicRoute path="/" myComponent={HomePage} auth={auth}/>
            </Switch>
          </AppCss>
        </Provider>
      </Router>
    );
  }
}

export default App;
