import React, {Component} from 'react'
import ReasonDetail from './ReasonDetail'
import styled from '@emotion/styled'

let ReasonLabel = styled.label({
  display: 'block'
})


class ReasonButton extends Component {

  constructor (props) {
    super(props);
    this.state = {checked: false};
    this.checkboxClicked = this.checkboxClicked.bind(this);
  }

  checkboxClicked() {
    if(!this.state.checked) {
      this.props.addReason(this.props.reasonId, this.props.dayToRate)
    } else {
      this.props.deleteReason(this.props.reasonId, this.props.dayToRate)
    }

    this.setState({
      checked: !this.state.checked
    });
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
         this.state.checked &&
         <ReasonDetail reasonDetailType={this.props.reasonDeatil}/>
       }
     </>
    )
 }
}

export default ReasonButton