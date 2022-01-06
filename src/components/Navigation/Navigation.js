import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import './Navigation.css';

class Navigation extends Component {
  state={
    selectedNav: "Home"
  }

  selectHomeHandler = () => {
    this.setState({
      selectedNav: "Home"
    });
  }

  selectExpenseHandler = () => {
    this.setState({
      selectedNav: "Expense"
    });
  }

  selectHistoryHandler = () => {
    this.setState({
      selectedNav: "History"
    });
  }

  selectSettingsHandler = () => {
    this.setState({
      selectedNav: "Settings"
    });
  }

  render () {
    let footer = null;
    if(this.state.selectedNav === "Home"){
        footer = (
            <div className='Navigation'>
                <div className='NavItem NavItemSelected' value="Home" onClick={() => this.selectHomeHandler()}>
                    <i className="fas fa-home fa-2x"></i>
                    <h6>Home</h6>
                </div>
                <div className='NavItem' value="Expense" onClick={() => this.selectExpenseHandler()}>
                    <i className="fas fa-dollar-sign fa-2x"></i>
                    <h6>Add Expense</h6>
                </div>
                <div className='NavItem' value="History" onClick={() => this.selectHistoryHandler()}>
                    <i className="fas fa-history fa-2x"></i>
                    <h6>History</h6>
                </div>
                <div className='NavItem' value="Settings" onClick={() => this.selectSettingsHandler()}>
                    <i className="fas fa-user-cog fa-2x"></i>
                    <h6>Settings</h6>
                </div>
            </div>
        );
    }else if(this.state.selectedNav === "Expense"){
        footer = (
            <div className='Navigation'>
                <div className='NavItem' value="Home" onClick={() => this.selectHomeHandler()}>
                    <i className="fas fa-home fa-2x"></i>
                    <h6>Home</h6>
                </div>
                <div className='NavItem NavItemSelected' value="Expense" onClick={() => this.selectExpenseHandler()}>
                    <i className="fas fa-dollar-sign fa-2x"></i>
                    <h6>Add Expense</h6>
                </div>
                <div className='NavItem' value="History" onClick={() => this.selectHistoryHandler()}>
                    <i className="fas fa-history fa-2x"></i>
                    <h6>History</h6>
                </div>
                <div className='NavItem' value="Settings" onClick={() => this.selectSettingsHandler()}>
                    <i className="fas fa-user-cog fa-2x"></i>
                    <h6>Settings</h6>
                </div>
            </div>
        );
    }else if(this.state.selectedNav === "History"){
        footer = (
            <div className='Navigation'>
                <div className='NavItem' value="Home" onClick={() => this.selectHomeHandler()}>
                    <i className="fas fa-home fa-2x"></i>
                    <h6>Home</h6>
                </div>
                <div className='NavItem' value="Expense" onClick={() => this.selectExpenseHandler()}>
                    <i className="fas fa-dollar-sign fa-2x"></i>
                    <h6>Add Expense</h6>
                </div>
                <div className='NavItem NavItemSelected' value="History" onClick={() => this.selectHistoryHandler()}>
                    <i className="fas fa-history fa-2x"></i>
                    <h6>History</h6>
                </div>
                <div className='NavItem' value="Settings" onClick={() => this.selectSettingsHandler()}>
                    <i className="fas fa-user-cog fa-2x"></i>
                    <h6>Settings</h6>
                </div>
            </div>
        );
    }else if(this.state.selectedNav === "Settings"){
        footer = (
            <div className='Navigation'>
                <div className='NavItem' value="Home" onClick={() => this.selectHomeHandler()}>
                    <i className="fas fa-home fa-2x"></i>
                    <h6>Home</h6>
                </div>
                <div className='NavItem' value="Expense" onClick={() => this.selectExpenseHandler()}>
                    <i className="fas fa-dollar-sign fa-2x"></i>
                    <h6>Add Expense</h6>
                </div>
                <div className='NavItem' value="History" onClick={() => this.selectHistoryHandler()}>
                    <i className="fas fa-history fa-2x"></i>
                    <h6>History</h6>
                </div>
                <div className='NavItem NavItemSelected' value="Settings" onClick={() => this.selectSettingsHandler()}>
                    <i className="fas fa-user-cog fa-2x"></i>
                    <h6>Settings</h6>
                </div>
            </div>
        );
    }
    
    return (
      <Aux>
          {footer}
      </Aux>
    )
  }
}

export default Navigation;