import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import './Login.scss';

export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  responseGoogle(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;

  }

  render() {
    return (
      <div>
        <GoogleLogin socialId="868328857754-msrf0blht1sr8nrsorh2da2b1aiv7umq.apps.googleusercontent.com"
          class="google-login"
          scope="profile"
          responseHandler={this.responseGoogle} />
      </div>
    );
  }

}

