import React, {Component} from 'react';
import LoginButton from '../components/Login/LoginButton';

class PageLayout extends Component {

  constructor(props){
    super(props);

  }


  render() {
    return (
      <div>
        <header>
          YourDay
          <LoginButton auth={this.props.auth}/>
        </header>
        <main className="container">
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default PageLayout