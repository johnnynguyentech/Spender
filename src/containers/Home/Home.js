import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Aux from '../../hoc/Aux/Aux';
import './Home.css';
import { PieChart } from 'react-minimal-pie-chart';

class Home extends Component {
  render () {
    return (
      <Aux>
        <Header/>
        <div className="Home">
            <h3 className="thisMonth">January 2022</h3>
            <h6>You've spent:</h6>
            <h4>$2321</h4>
            <PieChart
                animate = "true"
                data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                ]}
            />
            <div className='spending'>
                <div className='spending-col1'>
                    <p className='category1'>$1000 - Housing</p>
                    <p className='category2'>$238 - Food</p>
                    <p className='category3'>$45 - Transportation</p>
                    <p className='category4'>$0 - Medicial/Health</p>
                    <p className='category5'>$0 - Insurance</p>
                </div>
                <div className='spending-col2'>
                    <p className='category6'>$30 - Recreation</p>
                    <p className='category7'>$25 - Clothing</p>
                    <p className='category8'>$40 - Personal</p>
                    <p className='category9'>$0 - Travel</p>
                    <p className='category10'>$20 - Other</p>
                </div>
            </div>
        </div>
        <Navigation selected="Home"/>
      </Aux>
    )
  }
}

export default Home;