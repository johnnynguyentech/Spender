import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Aux from '../../hoc/Aux/Aux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './Expense.css';

class Expense extends Component {
    state = {
        expenseConfirm: false,
        title: "",
        amount: "",
        category: "",
        date: ""
    }

    AddExpenseHandler = () => {
        console.log(this.state.title)
        // this.setState({
        //     expenseConfirm: true
        // })
    }

    onChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    onDateChangeHandler = (event) => {
        const dateTemp = event.toLocaleString()
        const date = dateTemp.split(',').slice(0, 1).join(' ');
        this.setState({
            date: date
          });
    }

    render () {
        
        let expenseContent = (
            <div className='expenseContent'>
                <div className='expenseHeader'>
                    <i className="fas fa-search-dollar fa-10x"></i>
                </div>
                <div className='expense-form'>
                    <h6 className="page-title">Add Expense</h6>
                    <input 
                        className="expense-input" 
                        onChange={(event) => this.onChangeHandler(event)}
                        name="title"
                        value={this.state.title} 
                        type="text" 
                        placeholder='Expense Name'></input>
                    <input className="expense-input" type="text" value="" data-type="currency" placeholder="Amount"></input>
                    <input className="expense-input" placeholder='Category'></input>
                    <DatePicker
                        value={this.state.date}
                        onChange={date => this.onDateChangeHandler(date)}
                        startDate={new Date()}
                        className="expense-input"
                        id= "date"
                        placeholder="svvev"
                        />
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
                    <i className="fas fa-check-circle fa-8x"></i>
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