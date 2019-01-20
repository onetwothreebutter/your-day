import React, {Component} from 'react'
import styled from '@emotion/styled'

let SaveButtonCss = styled.button({
  background: 'mediumseagreen',
  color: 'white',
  borderRadius: '5px',
  padding: '0.4rem 1.2rem',
  fontSize: '1rem',
  '&:hover': {
    cursor: 'pointer',
    background: 'green'
  }
});


class SaveButtonEl extends Component {

  save() {
    this.props.saveDayRating(this.props.dayRating, );
  }
  
  render () {
    return (
      <>
        <SaveButtonCss onClick={this.save}>
          Save
        </SaveButtonCss>
      </>
      )
  }
}

export default SaveButtonEl