import React, { Component } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import Aux from '../../hoc/Aux/Aux';

import './MonthlySpending.css';

class MonthlySpending extends Component {
  render () {
    return (
      <Aux>
        <div className="MonthlySpending">
            <div className="MonthlySpendingGreen">
            <h3 className="thisMonth">January 2022</h3>
            <h6>You've spent:</h6>
            <h4>$2321</h4>
            <div className='chartWrapper'>
                <PieChart
                    animate = "true"
                    data={[
                        { title: 'One', value: 500, color: 'red' },
                        { title: 'Two', value: 200, color: 'orange' },
                        { title: 'Three', value: 400, color: 'yellow' },
                        { title: 'Four', value: 300, color: 'green' },
                        { title: 'Five', value: 200, color: 'blue' },
                        { title: 'Six', value: 0, color: 'purple' },
                        { title: 'Seven', value: 20, color: 'violet' },
                        { title: 'Eight', value: 0, color: 'pink' },
                        { title: 'Nine', value: 0, color: 'black' },
                        { title: 'Ten', value: 0, color: 'grey' }
                    ]}
                />
                <div className='spending'>
                    <div className='spending-col1'>
                        <p className='category1'><span>$1000</span> - Housing</p>
                        <p className='category2'><span>$238</span> - Food</p>
                        <p className='category3'><span>$45</span> - Transportation</p>
                        <p className='category4'><span>$200</span> - Medical/Health</p>
                        <p className='category5'><span>$0</span> - Insurance</p>
                    </div>
                    <div className='spending-col2'>
                        <p className='category6'><span>$30</span> - Recreation</p>
                        <p className='category7'><span>$25</span> - Clothing</p>
                        <p className='category8'><span>$40</span> - Personal</p>
                        <p className='category9'><span>$0</span> - Travel</p>
                        <p className='category10'><span>$20</span> - Other</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='expenseList'>
                <h3 className='expenseListTitle'>Expenses</h3>
                <div className='expenseItem'>
                    <h6>$200 - Medicine</h6>
                    <i className="fas fa-times"></i>
                </div>
                <div className='expenseItem'>
                    <h6>$14 - Tacos</h6>
                    <i className="fas fa-times"></i>
                </div>
                <div className='expenseItem'>
                    <h6>$1000 - Rent</h6>
                    <i className="fas fa-times"></i>
                </div>
                <div className='expenseItem'>
                    <h6>$30 - Shirt</h6>
                    <i className="fas fa-times"></i>
                </div>
            </div>
        </div>
      </Aux>
    )
  }
}

export default MonthlySpending;