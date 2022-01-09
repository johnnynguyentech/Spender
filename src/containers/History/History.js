import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import HistoryMonth from '../../components/HistoryMonth/HistoryMonth';
import MonthlySpending from '../../components/MonthlySpending/MonthlySpending';
import Navigation from '../../components/Navigation/Navigation';
import Aux from '../../hoc/Aux/Aux';

import './History.css';

class History extends Component {
    state = {
        historyList: true
    }

    historyContentHandler = () => {
        if(this.state.historyList){
            this.setState({
                historyList: false
            })
        }else{
            this.setState({
                historyList: true
            })
        }
    }

  render () {
    let historyContent = null;
    if(this.state.historyList){
        historyContent = (
            <Aux>
                <h6 className='page-title'>History</h6>
                <div className='history-list'>
                    <HistoryMonth  onClick={()=>this.historyContentHandler()}/>
                    <HistoryMonth  onClick={()=>this.historyContentHandler()}/>
                    <HistoryMonth  onClick={()=>this.historyContentHandler()}/>
                    <HistoryMonth  onClick={()=>this.historyContentHandler()}/>
                    <HistoryMonth  onClick={()=>this.historyContentHandler()}/>
                </div>
            </Aux>
        );
    }else if(!this.state.historyList){
        historyContent = (
            <div className='history-content'>
                <MonthlySpending />
            </div>
        )
    }
    let goBack = null;
    if(!this.state.historyList){
        goBack = (
            <div className='history-back' onClick={()=>this.historyContentHandler()}>
                <i className="fas fa-chevron-left"></i>
                <h6>Return</h6> 
            </div>
        )
    }
    return (
      <Aux>
        <Header/>
        <div className='History'>
            {goBack}
            {historyContent}
        </div>
        <Navigation selected="History"/>
      </Aux>
    )
  }
}

export default History;