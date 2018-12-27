import React, {Component} from 'react';
import {format} from 'date-fns';
import DayRatingButton from '../DayRatingButton/DayRatingButton'
import DayTypeReasons from '../DayTypeReasons/DayTypeReasons'
import SaveButtonEl from '../SaveButton/SaveButtonEl'
import styled from '@emotion/styled'

let DayRatingCss = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: '50rem',
  margin: 'auto'
});

let DayRatingButtonsCss = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
  maxWidth: '30rem',
  margin: '0 auto 1rem auto'
});

let HeadingCss = styled.h1({
  textAlign: 'center'
});

let HeadingDateCss = styled.span({
  display: 'block',
  marginTop: '1rem',
  fontWeight: '200',
  fontSize: '1rem'
});

let ReasonsSectionCss = styled.div({
  textAlign: 'center'
});

class DayRatingEl extends Component {

  render(){

    const dayTypes = [
        { dayType: 'greatDay',
          buttonText: 'Great'
        },
        { dayType: 'goodDay',
          buttonText: 'Good'
        },
        { dayType: 'fineDay',
          buttonText: 'Fine'
        },
        { dayType: 'notGoodDay',
          buttonText: 'Not Good'
        },
        { dayType: 'badDay',
          buttonText: 'Bad'
        }
      ];



    const dayRatingButtons = dayTypes.map( item => {
      return <DayRatingButton key={item.dayType} dayType={item.dayType} buttonText={item.buttonText} />
    });


    console.log('dayratingjs props',this.props)

    let reasonsSection = '';
    if (typeof this.props.ratingForCurrentDay !== 'undefined') {
      reasonsSection =
        <ReasonsSectionCss>
          <h2>because I...</h2>
          <DayTypeReasons dayType={this.props.ratingForCurrentDay}/>
        </ReasonsSectionCss>
    }

    return (
      <DayRatingCss>
        <HeadingCss>How was your work day?
          <HeadingDateCss>{format(this.props.dayToRate, 'dddd, MMMM D, YYYY')}</HeadingDateCss>
        </HeadingCss>
        <h2>My day was...</h2>
        <DayRatingButtonsCss>
          { dayRatingButtons }
        </DayRatingButtonsCss>

        { reasonsSection }

        <SaveButtonEl/>

      </DayRatingCss>
    )
  }
}

export default DayRatingEl