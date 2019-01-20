import React, {Component} from 'react';
import LoginButton from '../components/LoginButton/LoginButton';

class PageLayout extends Component {

  render() {
    return (
      <div>
        <header>
          YourDay
          <LoginButton />
        </header>
        <main className="container">
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default PageLayout