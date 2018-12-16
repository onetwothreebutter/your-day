import React, {Component} from 'react'
import Auth from '../../utils/Auth'

class LoginButton extends Component {

  constructor(props) {
    super(props)
    this.auth = new Auth();
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  render(){
    return (
        <>
        <button onClick={this.login}>Log In </button>
        <button onClick={this.logout}>Log Out </button>
      </>
    )
    
  }
}

export default LoginButton