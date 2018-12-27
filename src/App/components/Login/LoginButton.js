import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class LoginButton extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render(){
    console.log('render loginbutton')
    const { isAuthenticated } = this.props.auth;

    return (
        <>
          {!isAuthenticated() &&
          <button onClick={this.login}>Log In </button>
          }
          {isAuthenticated() &&
          <button onClick={this.logout}>Log Out </button>
          }

      </>
    )
    
  }
}

export default withRouter(LoginButton)