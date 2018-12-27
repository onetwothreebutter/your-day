import React, {Component} from 'react'
import firebase from 'firebase'
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
        <SaveButtonCss onClick={this.save}>
          Save
        </SaveButtonCss>
      </>
      )
  }
}

export default SaveButtonEl