import React, {Component} from 'react'
import ReasonDetailEl from './ReasonDetailEl'
import styled from '@emotion/styled'

let ReasonLabel = styled.label({
  display: 'block'
})


class ReasonButtonEl extends Component {

  constructor (props) {
    super(props);
    this.checkboxClicked = this.checkboxClicked.bind(this);
  }

  checkboxClicked() {
    if(!this.props.checked) {
      this.props.addReason(this.props.reasonId, this.props.dayToRate)
    } else {
      this.props.deleteReason(this.props.reasonId, this.props.dayToRate)
    }
  }
  
 render () {
   console.log('loggin props', this.props)
   return (
     <>
      <ReasonLabel>
        <input type='checkbox' name='reasonCheckbox' checked={this.props.checked} value={this.props.reasonId} onChange={this.checkboxClicked}/>
        {this.props.reasonText}
      </ReasonLabel>

       { this.props.reasonDetail.includes('person') &&
         this.props.checked &&
         <ReasonDetailEl reasonDetailType={this.props.reasonDeatil}/>
       }
     </>
    )
 }
}

export default ReasonButtonEl