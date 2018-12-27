import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';


class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      redirectToPreviousRoute: false
    };
  }

  login() {
    this.props.auth.login();
    this.setState({ redirectToPreviousRoute: true });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToPreviousRoute } = this.state;

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />;
    }

    return (
      <>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login.bind(this)}>Log in</button>
      </>
    );
  }
}

export default LoginPage