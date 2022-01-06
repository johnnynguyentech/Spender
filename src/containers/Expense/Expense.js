import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import './Expense.css';

class Expense extends Component {
  render () {
    return (
      <Aux>
        <Header/>
        <h1>Expense</h1>
      </Aux>
    )
  }
}

export default Expense;