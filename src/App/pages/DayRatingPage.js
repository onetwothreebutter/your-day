import React, {Component} from 'react';
import PageLayout from '../pages/PageLayout'
import DayRating from '../components/DayRating/DayRating';

class DayRatingPage extends Component {

  render(){

    return (
      <PageLayout>
        <DayRating/>
      </PageLayout>
    )
  }
}

export default DayRatingPage