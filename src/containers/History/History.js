import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import './History.css';

class History extends Component {
  render () {
    return (
      <Aux>
        <Header/>
            <h1>History</h1>
        <Navigation selected="History"/>
      </Aux>
    )
  }
}

export default History;