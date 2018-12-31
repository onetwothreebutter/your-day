import React from 'react';
import { withRouter } from 'react-router';
import loading from './loading.svg';

function Callback(props) {
  props.auth.handleAuthentication().then(() => {
    props.auth.getProfile();
    let redirectLocation = JSON.parse(localStorage.getItem('redirect_after_login'));
    localStorage.removeItem('redirect_after_login');
    let redirect = (redirectLocation !== null) ? redirectLocation.pathname : '/';
    props.history.push(redirect);
  });

  return (
    <div>
      <img src={loading} alt="loading"/>
    </div>
  );
}

export default withRouter(Callback);