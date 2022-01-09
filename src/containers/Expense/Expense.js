import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Aux from '../../hoc/Aux/Aux';

import './Expense.css';

class Expense extends Component {
    state = {
        expenseConfirm: false
    }

    AddExpenseHandler = () => {
        this.setState({
            expenseConfirm: true
        })
    }

    render () {
        
        let expenseContent = (
            <div className='expenseContent'>
                <div className='expenseHeader'>
                    <i class="fas fa-search-dollar fa-10x"></i>
                </div>
                <div className='expense-form'>
                    <h6 className="page-title">Add Expense</h6>
                    <input className="expense-input" placeholder='Expense Name'></input>
                    <input className="expense-input" type="text" value="" data-type="currency" placeholder="Amount"></input>
                    <input className="expense-input" placeholder='Category'></input>
                    <input className="expense-input" placeholder='Date'></input>
                    <button className="addBtn"  onClick={()=>this.AddExpenseHandler()}>ADD EXPENSE</button>
                    <div className='clearBtn'>
                        <h6>Clear</h6>
                    </div>
                </div>
                
            </div>
        )
        if(this.state.expenseConfirm){
            expenseContent = (
                <div className='expenseSuccess'>
                    <i class="fas fa-check-circle fa-8x"></i>
                    <h4>SUCCESS!</h4>
                    <p>Your expense has been logged.</p>
                    <button className='goToHome' onClick={() => this.props.history.push("/home")}>GO TO HOME</button>
                </div>
            )
        }
        return (
        <Aux>
            <Header/>
            <div className="Expense">
                {expenseContent}
            </div>
            <Navigation selected="Expense"/>
        </Aux>
        )
  }
}

export default Expense;