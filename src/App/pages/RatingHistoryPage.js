import React, {Component} from 'react';
import PageLayout from '../pages/PageLayout'
import RatingHistory from '../components/RatingHistory/RatingHistory';

class RatingHistoryPage extends Component {

  render(){

    return (
      <PageLayout auth={this.props.auth}>
        <RatingHistory/>
      </PageLayout>
    )
  }
}

export default RatingHistoryPage