import React, {Component} from 'react';
import { Route } from 'react-router-dom';

class PublicRoute extends Component{

  render() {

    let MyComponent = this.props.myComponent;
    let componentProps = this.props;
    let auth = this.props.auth;

    return (
      <Route {...this.props} render={(routeProps) => {
        return <MyComponent {...componentProps} />;
      }} />
    )
  }
}

export default PublicRoute;