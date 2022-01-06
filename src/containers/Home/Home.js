import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import './Home.css';

class Home extends Component {
  render () {
    return (
      <Aux>
        <Header/>
        <h1>home</h1>
        <Navigation/>
      </Aux>
    )
  }
}

export default Home;