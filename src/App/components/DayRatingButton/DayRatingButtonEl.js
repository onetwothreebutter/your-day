import React, {Component} from 'react'
import styled from '@emotion/styled'

let ButtonText = styled.span({
  paddingLeft: '0.5rem'
});


class DayRatingButtonEl extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    if(!this.props.dayRating.dayRating) {
      this.props.addDayRating(this.props.dayType, this.props.dayToRate);
    } else {
      this.props.updateDayRating(this.props.dayType, this.props.dayToRate);
    }

  }

  render(){
    console.log("props", this.props);
    let checkedAttr = false;
    if(this.props.dayRating.dayRating === this.props.dayType) {
      checkedAttr = true;
    }



    return (
      <> 
        <label>
          <input type='radio' checked={checkedAttr}
                 name='dayType'
                 onChange={this.handleClick}/>
          <ButtonText>
            {this.props.buttonText}
          </ButtonText>
        </label>
        
      </>
    )
  }
}

export default DayRatingButtonEl