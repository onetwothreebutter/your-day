import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppCss from './App/styles/AppStyles';
import HomePage from './App/pages/HomePage';
import LoginPageEl from './App/pages/LoginPage/LoginPageEl'
import DayRatingPage from './App/pages/DayRatingPage';
import DashboardPage from './App/pages/DashboardPage';
import RatingHistoryPage from './App/pages/RatingHistoryPage';
import HappiestCompanies from './App/pages/HappiestCompanies';
import { connect } from 'react-redux';
import requireAuth from './App/components/requireAuth';
import { fetchUser, fetchDayRatings } from './App/stateManagement/actions';


class App extends Component {

  componentWillMount() {
    this.props.fetchUser();
    this.props.fetchDayRatings();
  }

  render() {

    return (
      <Router>
        <AppCss>
          <Switch>
            /* Authentication Required */
            <Route path="/rate-day" component={requireAuth(DayRatingPage)} />
            <Route path="/rating-history" component={requireAuth(RatingHistoryPage)} />
            <Route path="/dashboard" component={requireAuth(DashboardPage)} />

            /* Public Routes */
            <Route path="/login" render={(routerProps) => <LoginPageEl {...routerProps}  /> } />
            <Route path="/happiest-companies" component={HappiestCompanies} />
            <Route path="/home" component={HomePage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </AppCss>
      </Router>
    );
  }
}

export default connect(null, { fetchUser, fetchDayRatings })(App);
