import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginButtonEl extends Component {

  render(){
    return (
        <>
          {!this.props.loggedIn &&
          <button onClick={() => this.props.login()}>Log In </button>

          }
          {this.props.loggedIn &&
          <button onClick={() => this.props.logout()}>Log Out </button>
          }

          {this.props.loggedIn &&
          <div>{this.props.user.displayName}</div>
          }
      </>
    )
    
  }
}

export default withRouter(LoginButtonEl)