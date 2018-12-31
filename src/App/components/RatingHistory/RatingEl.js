import React, {Component} from 'react'
import styled from '@emotion/styled'


class RatingEl extends Component {
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

    return (
      <>
        <li>
          { this.props.day }
        </li>

      </>
    )
  }
}

export default RatingEl