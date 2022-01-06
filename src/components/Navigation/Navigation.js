import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Aux from '../../hoc/Aux/Aux';
import './Navigation.css';

class Navigation extends Component {
  state={
    selectedNav: "Home"
  }

  componentDidMount () {
    this.setState({
        selectedNav: this.props.selected
      });
  }

  render () {
    let footer = null;
    if(this.state.selectedNav === "Home"){
        footer = (
            <div className='Navigation'>
                <div className='NavItem NavItemSelected' onClick={() => this.props.history.push("/home")}>
                    <i className="fas fa-home fa-2x"></i>
                    <h6>Home</h6>
                </div>
                <div className='NavItem' onClick={() => this.props.history.push("/expense")}>
                    <i className="fas fa-dollar-sign fa-2x"></i>
                    <h6>Add Expense</h6>
                </div>
                <div className='NavItem' onClick={() => this.props.history.push("/history")}>
                    <i className="fas fa-history fa-2x"></i>
                    <h6>History</h6>
                </div>
                <div className='NavItem' onClick={() => this.props.history.push("/settings")}>
                    <i className="fas fa-user-cog fa-2x"></i>
                    <h6>Settings</h6>
                </div>
            </div>
        );
    }else if(this.state.selectedNav === "Expense"){
        footer = (
            <div className='Navigation'>
                <div className='NavItem' onClick={() => this.props.history.push("/home")}>
                    <i className="fas fa-home fa-2x"></i>
                    <h6>Home</h6>
                </div>
                <div className='NavItem NavItemSelected' onClick={() => this.props.history.push("/expense")}>
                    <i className="fas fa-dollar-sign fa-2x"></i>
                    <h6>Add Expense</h6>
                </div>
                <div className='NavItem' onClick={() => this.props.history.push("/history")}>
                    <i className="fas fa-history fa-2x"></i>
                    <h6>History</h6>
                </div>
                <div className='NavItem' onClick={() => this.props.history.push("/settings")}>
                    <i className="fas fa-user-cog fa-2x"></i>
                    <h6>Settings</h6>
                </div>
            </div>
        );
    }else if(this.state.selectedNav === "History"){
        footer = (
            <div className='Navigation'>
                <div className='NavItem' onClick={() => this.props.history.push("/home")}>
                    <i className="fas fa-home fa-2x"></i>
                    <h6>Home</h6>
                </div>
                <div className='NavItem' onClick={() => this.props.history.push("/expense")}>
                    <i className="fas fa-dollar-sign fa-2x"></i>
                    <h6>Add Expense</h6>
                </div>
                <div className='NavItem NavItemSelected' onClick={() => this.props.history.push("/history")}>
                    <i className="fas fa-history fa-2x"></i>
                    <h6>History</h6>
                </div>
                <div className='NavItem' onClick={() => this.props.history.push("/settings")}>
                    <i className="fas fa-user-cog fa-2x"></i>
                    <h6>Settings</h6>
                </div>
            </div>
        );
    }else if(this.state.selectedNav === "Settings"){
        footer = (
            <div className='Navigation'>
                <div className='NavItem' onClick={() => this.props.history.push("/home")}>
                    <i className="fas fa-home fa-2x"></i>
                    <h6>Home</h6>
                </div>
                <div className='NavItem' onClick={() => this.props.history.push("/expense")}>
                    <i className="fas fa-dollar-sign fa-2x"></i>
                    <h6>Add Expense</h6>
                </div>
                <div className='NavItem' onClick={() => this.props.history.push("/history")}>
                    <i className="fas fa-history fa-2x"></i>
                    <h6>History</h6>
                </div>
                <div className='NavItem NavItemSelected' onClick={() => this.props.history.push("/settings")}>
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

export default withRouter(Navigation);