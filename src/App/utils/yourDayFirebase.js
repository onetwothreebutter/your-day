import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyC9rMaW5UiotPoYlcwXWlh89HiuRi0yWWE",
  authDomain: "yourday-50644.firebaseapp.com",
  databaseURL: "https://yourday-50644.firebaseio.com",
  projectId: "yourday-50644",
  storageBucket: "yourday-50644.appspot.com",
  messagingSenderId: "1085008732154"
};

firebase.initializeApp(config);

export const databaseRef = firebase.database().ref();
export const firebaseRef = firebase;
export const dayRatingsRef = databaseRef.child('day-ratings');
export const authRef = firebase.auth();
export const authProvider = new firebase.auth.GoogleAuthProvider();

