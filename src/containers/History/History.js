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
        <div className='History'>
            <h6 className='page-title'>History</h6>
        </div>
        <Navigation selected="History"/>
      </Aux>
    )
  }
}

export default History;