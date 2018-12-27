import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

class SecretRoute extends Component{

  render() {

    let MyComponent = this.props.myComponent;
    let componentProps = this.props;
    let auth = this.props.auth;

    if(!auth.isAuthenticated()){
      localStorage.setItem('redirect_after_login', JSON.stringify(this.props.location));
    }

    return (
      <Route {...this.props} render={(props) => {
        return auth.isAuthenticated() === true
          ? <MyComponent {...componentProps} />
          : <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
            auth: auth
          }} />
      }} />
    )
  }
}

export default SecretRoute;