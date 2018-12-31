import React, {Component} from 'react'
import RatingEl from './RatingEl'
import styled from '@emotion/styled'


class RatingHistoryEl extends Component {
  constructor(props){
    super(props)

    // this.handleClick = this.handleClick.bind(this)
  }

  // handleClick(event) {
  //   if(!this.props.id) {
  //     this.props.addDayRating(this.props.dayType, this.props.dayToRate);
  //   } else {
  //     this.props.updateDayRating(this.props.id, this.props.dayType, this.props.dayToRate);
  //   }
  //
  // }

  render(){
    let ratings = this.props.allRatings.forEach( item => <RatingEl {...item} /> );


    return (
      <>
        <h1>Ratings History</h1>
        <ul>
          { ratings }
        </ul>

      </>
    )
  }
}

export default RatingHistoryEl