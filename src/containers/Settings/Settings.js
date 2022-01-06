import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';

import './Settings.css';

class Settings extends Component {
  render () {
    return (
      <Aux>
        <h1>Settings</h1>
      </Aux>
    )
  }
}

export default Settings;