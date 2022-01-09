import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';

import './Settings.css';

class Settings extends Component {
    state = {
        help1: false,
        help2: false
    }

    onHelp1Handler = () => {
        if(!this.state.help1){
            this.setState({
                help1: true
            })
        }else{
            this.setState({
                help1: false
            })
        }
    }

    onHelp2Handler = () => {
        if(!this.state.help2){
            this.setState({
                help2: true
            })
        }else{
            this.setState({
                help2: false
            })
        }
    }

    render () {
        let helpCenter1 = null;
        if(!this.state.help1){
            helpCenter1 = (
                <div className='settingsItem' onClick={()=>this.onHelp1Handler()}>
                    <p>What is Spender?</p>
                    <i className="fas fa-chevron-right settingsChevron"></i>
                </div>
            );
        }else{
            helpCenter1 = (
                <Aux>
                    <div className='settingsItem' onClick={()=>this.onHelp1Handler()}>
                        <p>What is Spender?</p>
                        <i className="fas fa-chevron-down settingsChevron"></i>
                    </div>
                    <p className='helpAnswer'>Spender is a mobile app that allows you to spend, budget, and save! With Spender, you can log in your everyday expenses to keep track of your spending.</p>
                </Aux>
            );
        }
        let helpCenter2 = null;
        if(!this.state.help2){
            helpCenter2 = (
                <div className='settingsItem' onClick={()=>this.onHelp2Handler()}>
                    <p>How do I add and remove expenses?</p>
                    <i className="fas fa-chevron-right settingsChevron"></i>
                </div>
            );
        }else{
            helpCenter2 = (
                <Aux>
                    <div className='settingsItem' onClick={()=>this.onHelp2Handler()}>
                        <p>How do I add and remove expenses?</p>
                        <i className="fas fa-chevron-down settingsChevron"></i>
                    </div>
                    <p className='helpAnswer'>To add an expense, go to the 'Add Expense' tab and log in your expense. From here, we'll take care of the calculations! To remove an expense, find the expense list on the 'Home' tab, or in any previous month in the 'History' tab and click the 'X' icon. Using Spender is that simple!</p>
                </Aux>
            );
        }
        return (
            <Aux>
                <Header />
                <div className='Settings'>
                    <h6 className='page-title'>Settings</h6>
                    <i className="fas fa-user-circle fa-5x"></i>
                    <h5>example@example.com</h5>
                    <div className='settingsContent'>
                        <h5>Help Center</h5>
                        {helpCenter1}
                        {helpCenter2}
                        <h5>Account Settings</h5>
                        <div className='settingsItem' onClick={() => this.props.history.push("/")}>
                            <p className='logoutBtn'>Log Out</p>
                            <i className="fas fa-chevron-right settingsChevron"></i>
                        </div>
                        {/* <NavLink to='/logout'>
                            <div className='settingsItem'>
                                <p className='logoutBtn'>Log Out</p>
                                <i className="fas fa-chevron-right settingsChevron"></i>
                            </div>
                        </NavLink> */}
                    </div>
                </div>
                <Navigation selected="Settings"/>
            </Aux>
        )
    }
}

export default Settings;