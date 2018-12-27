import React, {Component} from 'react'
import ReasonButtonEl from '../ReasonButton/ReasonButtonEl'
import styled from '@emotion/styled'

let ReasonButtonWrapper = styled.div({
  margin: '0 auto 3rem auto',
  textAlign: 'left',
  maxWidth: '20rem',
  paddingLeft: '10rem'
});


class DayTypeReasonsEl extends Component {
  constructor(props){
    super(props)
    this.reasons = [
      {
         reasonId: 'gotALotDone',
         reasonText: 'Got A Lot Done',
         associatedDayTypes: ['greatDay','goodDay','fineDay'],
         reasonDetail: []
      },
      {
        reasonId: 'didGoodWork',
        reasonText: 'Did Good Work',
        associatedDayTypes: ['greatDay','goodDay','fineDay'],
        reasonDetail: []
      },
      {
        reasonId: 'helpedCoworkers',
        reasonText: 'Helped Coworkers',
        associatedDayTypes: ['greatDay','goodDay','fineDay'],
        reasonDetail: []
      },
      {
        reasonId: 'overworkedButGotALotDone',
        reasonText: 'Overworked But Got A Lot Done',
        associatedDayTypes: ['goodDay','fineDay'],
        reasonDetail: []
      },
      {
        reasonId: 'sick',
        reasonText: `Working Even Though You're Sick`,
        associatedDayTypes: ['fineDay','notGoodDay', 'badDay'],
        reasonDetail: []
      },
      {
        reasonId: 'personRuinedDay',
        reasonText: 'Someone at Work Ruined Your Day',
        associatedDayTypes: ['fineDay','notGoodDay', 'badDay'],
        reasonDetail: ['person']
      }
    ]
    
  }
  
 render () {
    console.log('DayTypeREasonsEl')
   let ratingForCurrentDay = this.props.ratingForCurrentDay;
   let currentReasons = this.props.currentReasons;
   let reasonsEls = 
    this.reasons
    .filter((reason) => {
      return reason.associatedDayTypes.includes(ratingForCurrentDay);
    })
    .map((reason) => {
      let isChecked = false
      this.props.currentReasons.forEach( item => {
        if (item.reasonId === reason.reasonId && item.dayRating === ratingForCurrentDay) {
          isChecked = true;
        }
      });
      reason.checked = isChecked;
      return reason;
    })
    .map((reason) => {
      console.log("currentREasons", this.props.currentReasons)
      console.log("one", reason)
      return <ReasonButtonEl key={reason.reasonId}
                             {...reason}
                             dayRating={this.props.ratingForCurrentDay}
                             dayToRate={this.props.dayToRate}
                             addReason={this.props.addReason}
                             deleteReason={this.props.deleteReason}
      />;
    });

   return ( 
     <ReasonButtonWrapper> 
      { reasonsEls } 
     </ReasonButtonWrapper> 
    )
 }
}

export default DayTypeReasonsEl