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
        <h1>home</h1>
        <Navigation selected="Home"/>
      </Aux>
    )
  }
}

export default Home;