import React, {Component} from 'react'
import ReasonDetail from './ReasonDetail'
import styled from '@emotion/styled'

let ReasonLabel = styled.label({
  display: 'block'
})


class ReasonButton extends Component {

  constructor (props) {
    super(props);
    this.state = {checked: false, reason: null};
    this.checkboxClicked = this.checkboxClicked.bind(this);
  }

  checkboxClicked() {
    this.setState({
      checked: !this.state.checked
    });

    
  }
  
 render () {
   console.log('loggin props', this.props)
   return (
     <>
      <ReasonLabel>
        <input type='checkbox' name='reasonCheckbox' value={this.props.reasonId} onClick={this.checkboxClicked}/>
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