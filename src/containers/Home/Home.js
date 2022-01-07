import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import MonthlySpending from '../../components/MonthlySpending/MonthlySpending';
import Navigation from '../../components/Navigation/Navigation';
import Aux from '../../hoc/Aux/Aux';

import './Home.css';

class Home extends Component {
  render () {
    return (
      <Aux>
        <Header/>
        <div className="Home">
            <MonthlySpending />
        </div>
        <Navigation selected="Home"/>
      </Aux>
    )
  }
}

export default Home;