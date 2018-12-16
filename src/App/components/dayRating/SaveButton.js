import React, {Component} from 'react'
import firebase from 'firebase'
import styled from '@emotion/styled'

let SaveButtonEl = styled.button({
  background: 'mediumseagreen',
  color: 'white',
  borderRadius: '5px',
  padding: '10px 20px',
  '&:hover': {
    cursor: 'pointer',
    background: 'green'
  }
});


class SaveButton extends Component {

  constructor(props){
    super(props);
    this.save = this.save.bind(this);
  }

  save() {
    var config = {
    apiKey: "AIzaSyC9rMaW5UiotPoYlcwXWlh89HiuRi0yWWE",
    authDomain: "yourday-50644.firebaseapp.com",
    databaseURL: "https://yourday-50644.firebaseio.com",
    storageBucket: "",
    };
    firebase.initializeApp(config);

    var database = firebase.database();

  }
  
  render () {
    return (
      <>
        <SaveButtonEl onClick={this.save}>
          Save
        </SaveButtonEl>
      </>
      )
  }
}

export default SaveButton