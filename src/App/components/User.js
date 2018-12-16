import React, {Component} from 'react'
import styled from '@emotion/styled'


//https://developer.linkedin.com/docs/fields/company-profile


class User extends Component {
  
 render () {


   return (
     <>
      <label>
        Your Name
        <input type='text' name="personName" value="" />
       </label>
       <label>
        Company
        <input type='text' name="company" value=""/>
       </label>
     </>
    )
 }
}

export default User