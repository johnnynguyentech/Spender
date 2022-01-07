import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Aux from '../../hoc/Aux/Aux';

import './Home.css';

class Home extends Component {
  render () {
    return (
      <Aux>
        <Header/>
        <div className="Home">
            <h3 className="thisMonth">January 2022</h3>
            <h6>You've spent:</h6>
            <h4>$2321</h4>
            <h6>out of $5200</h6>
        </div>
        <Navigation selected="Home"/>
      </Aux>
    )
  }
}

export default Home;