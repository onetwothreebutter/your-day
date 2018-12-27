import React, {Component} from 'react';
import PageLayout from '../pages/PageLayout'
import DayRating from '../components/DayRating/DayRating';

class DayRatingPage extends Component {

  render(){

    return (
      <PageLayout auth={this.props.auth}>
        <DayRating/>
      </PageLayout>
    )
  }
}

export default DayRatingPage