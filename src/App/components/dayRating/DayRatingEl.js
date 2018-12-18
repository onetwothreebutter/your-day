import React, {Component} from 'react';
import DayRatingButton from '../../containers/dayRating/DayRatingButton'
import DayTypeReasons from '../../containers/dayRating/DayTypeReasons'
import SaveButton from './SaveButton'
import styled from '@emotion/styled'

let DayRatingButtons = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  maxWidth: '30rem',
  margin: '0 auto 1rem auto'
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
    debugger
    return (
      <div>
        <h1>How was your work day?</h1>
        <h2>My day was...</h2>
        <DayRatingButtons>
          { dayRatingButtons }
        </DayRatingButtons>

        {
          this.state.dayType &&
          <h2>because I ...</h2>
        }
        {
          this.state.dayType &&
          <DayTypeReasons dayType={this.state.dayType} />
        }

        <SaveButton/>

      </div>
    )
  }
}

export default DayRatingEl