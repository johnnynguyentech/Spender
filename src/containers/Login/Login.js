import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import './Login.css';

class Login extends Component {
  render () {
    return (
      <Aux>
        <Header/>
        <h1>Login</h1>
      </Aux>
    )
  }
}

export default Login;