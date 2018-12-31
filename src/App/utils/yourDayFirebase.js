import firebase from 'firebase'

var myFirebase = null;
function yourDayFirebase() {

  if(myFirebase !== null) {
    return myFirebase;
  }

  var config = {
    apiKey: "AIzaSyC9rMaW5UiotPoYlcwXWlh89HiuRi0yWWE",
    authDomain: "yourday-50644.firebaseapp.com",
    databaseURL: "https://yourday-50644.firebaseio.com",
    projectId: "yourday-50644",
    storageBucket: "yourday-50644.appspot.com",
    messagingSenderId: "1085008732154"
  };

  firebase.initializeApp(config);

  myFirebase = firebase.database();

  return myFirebase;
}

export default yourDayFirebase;