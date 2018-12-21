import React, {Component} from 'react'
import Select from 'react-select'
import styled from '@emotion/styled'

class ReasonDetailEl extends Component {


  updateReaon() {
    console.log(arguments);
  }
  
 render () {

   let previousPeople = [
     {value: 'jackie', label: 'Jackie'},
     {value: 'vlad', label: 'Vlad'}
     ];

   return (
     <>
      <label>
          <Select
            isMulti
            name="person"
            options={previousPeople}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={this.updateReaon}
          />
       </label>
     </>
    )
 }
}

export default ReasonDetailEl