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
        <div className="Expense">
            <h6 className="page-title">Add Expense</h6>
            <div className='addOrClear'>
                <h6>Clear</h6>
                <h6>Add Expense</h6>
            </div>
        </div>
        
        <Navigation selected="Expense"/>
      </Aux>
    )
  }
}

export default Expense;