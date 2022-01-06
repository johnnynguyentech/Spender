import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

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
                    <p className='helpAnswer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Aux>
            );
        }
        let helpCenter2 = null;
        if(!this.state.help2){
            helpCenter2 = (
                <div className='settingsItem' onClick={()=>this.onHelp2Handler()}>
                    <p>How do I use Spender?</p>
                    <i className="fas fa-chevron-right settingsChevron"></i>
                </div>
            );
        }else{
            helpCenter2 = (
                <Aux>
                    <div className='settingsItem' onClick={()=>this.onHelp2Handler()}>
                        <p>How do I use Spender?</p>
                        <i className="fas fa-chevron-down settingsChevron"></i>
                    </div>
                    <p className='helpAnswer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Aux>
            );
        }
        return (
            <Aux>
                <Header />
                <div className='Settings'>
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
                    </div>
                </div>
                <Navigation selected="Settings"/>
            </Aux>
        )
    }
}

export default Settings;