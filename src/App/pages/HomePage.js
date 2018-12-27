import React, {Component} from 'react';
import PageLayout from './PageLayout'

class HomePage extends Component {

  render(){
    return (
      <>
        <PageLayout auth={this.props.auth}>
          <h1>Home Pages</h1>
        </PageLayout>
      </>
    )
  }
}

export default HomePage