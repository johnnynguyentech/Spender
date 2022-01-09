import React, { Component } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import ReactSvgPieChart from "react-svg-piechart";

import Aux from '../../hoc/Aux/Aux';

import './MonthlySpending.css';

class MonthlySpending extends Component {
  render () {
    return (
      <Aux>
        <div className="MonthlySpending">
            <div className="MonthlySpendingGreen">
                <br></br>
            <div className='monthJumbo'>
                <h3 className="thisMonth">January 2022</h3>
                <h6>You spent:</h6>
                <h4 className="monthAmount">$2321</h4>
            </div>
            <div className='chartContainer'>

            
            <div className='chartWrapper'>
                <ReactSvgPieChart
                    animate = "true"
                    expandOnHover = "true"
                    data={[
                        { title: 'Housing', value: 500, color: '#9A47FF' },
                        { title: 'Food', value: 200, color: '#DF87FF' },
                        { title: 'Transportation', value: 400, color: '#F1C9FF' },
                        { title: 'Medical/Health', value: 300, color: '#004BA8' },
                        { title: 'Insurance', value: 200, color: '#6CBEED' },
                        { title: 'Recreation', value: 100, color: '#C9F0FF' },
                        { title: 'Clothing', value: 200, color: '#5B8C5A' },
                        { title: 'Personal', value: 300, color: '#37FF8B' },
                        { title: 'Travel', value: 250, color: '#D9F9A5' },
                        { title: 'Other', value: 80, color: '#EEE3AB' }
                    ]}
                />
            </div>
                <div className='spending'>
                    <div className='spendingCategory1'>
                        <div className='spendingCategory2'>
                            <i class="fas fa-square color1"></i>
                            <h6>Housing</h6>
                        </div>
                        <div className='spendingCategory3'>
                            <h6>$500</h6>
                        </div>
                    </div>
                    <div className='spendingCategory1'>
                        <div className='spendingCategory2'>
                            <i class="fas fa-square color2"></i>
                            <h6>Food</h6>
                        </div>
                        <div className='spendingCategory3'>
                            <h6>$200</h6>
                        </div>
                    </div>
                    <div className='spendingCategory1'>
                        <div className='spendingCategory2'>
                            <i class="fas fa-square color3"></i>
                            <h6>Transportation</h6>
                        </div>
                        <div className='spendingCategory3'>
                            <h6>$400</h6>
                        </div>
                    </div>
                    <div className='spendingCategory1'>
                        <div className='spendingCategory2'>
                            <i class="fas fa-square color4"></i>
                            <h6>Medical/Health</h6>
                        </div>
                        <div className='spendingCategory3'>
                            <h6>$300</h6>
                        </div>
                    </div>
                    <div className='spendingCategory1'>
                        <div className='spendingCategory2'>
                            <i class="fas fa-square color5"></i>
                            <h6>Insurance</h6>
                        </div>
                        <div className='spendingCategory3'>
                            <h6>$200</h6>
                        </div>
                    </div>
                    <div className='spendingCategory1'>
                        <div className='spendingCategory2'>
                            <i class="fas fa-square color6"></i>
                            <h6>Recreation</h6>
                        </div>
                        <div className='spendingCategory3'>
                            <h6>$100</h6>
                        </div>
                    </div>
                    <div className='spendingCategory1'>
                        <div className='spendingCategory2'>
                            <i class="fas fa-square color7"></i>
                            <h6>Clothing</h6>
                        </div>
                        <div className='spendingCategory3'>
                            <h6>$200</h6>
                        </div>
                    </div>
                    <div className='spendingCategory1'>
                        <div className='spendingCategory2'>
                            <i class="fas fa-square color8"></i>
                            <h6>Personal</h6>
                        </div>
                        <div className='spendingCategory3'>
                            <h6>$300</h6>
                        </div>
                    </div>
                    <div className='spendingCategory1'>
                        <div className='spendingCategory2'>
                            <i class="fas fa-square color9"></i>
                            <h6>Travel</h6>
                        </div>
                        <div className='spendingCategory3'>
                            <h6>$250</h6>
                        </div>
                    </div>
                    <div className='spendingCategory1'>
                        <div className='spendingCategory2'>
                            <i class="fas fa-square color10"></i>
                            <h6>Other</h6>
                        </div>
                        <div className='spendingCategory3'>
                            <h6>$80</h6>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='expenseList'>
                <h3 className='expenseListTitle'>Expenses</h3>
                <div className='expenseItem'>
                    <div className='expenseItem2'>
                        <h5>-$200</h5>
                        <div className='expenseItem3'>
                            <h6>Medicine</h6>
                            <p>01-14-2022</p>
                        </div>
                    </div>            
                    <i className="fas fa-times"></i>
                </div>
                <div className='expenseItem'>
                    <div className='expenseItem2'>
                        <h5>-$50</h5>
                        <div className='expenseItem3'>
                            <h6>Korean Short Ribs</h6>
                            <p>01-12-2022</p>
                        </div>
                    </div>            
                    <i className="fas fa-times"></i>
                </div>
                <div className='expenseItem'>
                    <div className='expenseItem2'>
                        <h5>-$250</h5>
                        <div className='expenseItem3'>
                            <h6>Mattress</h6>
                            <p>01-11-2022</p>
                        </div>
                    </div>            
                    <i className="fas fa-times"></i>
                </div>
                <div className='expenseItem'>
                    <div className='expenseItem2'>
                        <h5>-$1000</h5>
                        <div className='expenseItem3'>
                            <h6>Rent</h6>
                            <p>01-01-2022</p>
                        </div>
                    </div>            
                    <i className="fas fa-times"></i>
                </div>
                <div className='expenseItem'>
                    <div className='expenseItem2'>
                        <h5>-$20</h5>
                        <div className='expenseItem3'>
                            <h6>Chick Fil A</h6>
                            <p>01-01-2022</p>
                        </div>
                    </div>            
                    <i className="fas fa-times"></i>
                </div>
            </div>
        </div>
      </Aux>
    )
  }
}

export default MonthlySpending;