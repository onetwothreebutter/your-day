// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebaseRef } from '../../utils/yourDayFirebase';



class LoginPageEl extends React.Component {

  render() {
    // Configure FirebaseUI.
    const uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      signInSuccessUrl: '/signedIn',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebaseRef.auth.GoogleAuthProvider.PROVIDER_ID,
        firebaseRef.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    };
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseRef.auth()}/>
      </div>
    );
  }
}

export default LoginPageEl

