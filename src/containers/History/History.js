import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import './History.css';

class History extends Component {
  render () {
    return (
      <Aux>
        <Header/>
        <h1>History</h1>
      </Aux>
    )
  }
}

export default History;