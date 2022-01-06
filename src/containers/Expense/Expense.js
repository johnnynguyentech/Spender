import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import './Expense.css';

class Expense extends Component {
  render () {
    return (
      <Aux>
        <Header/>
            <h1>Expense</h1>
        <Navigation selected="Expense"/>
      </Aux>
    )
  }
}

export default Expense;