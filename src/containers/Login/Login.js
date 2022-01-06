import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import './Login.css';

class Login extends Component {
    state = {
        signOrLog: "login"
    }

    signOrLogHandler =()=> {
        if(this.state.signOrLog === "login"){
            this.setState({
                signOrLog: "signup"
            })
        }else{
            this.setState({
                signOrLog: "login"
            })
        }
    }

    render () {
        let signOrLog = null;
        if(this.state.signOrLog === "login"){
            signOrLog = (
                <div>
                    <button className='log-or-sign-btn' onClick={() => this.props.history.push("/home")}>LOG IN</button>
                    <p className='log-or-sign-text' onClick={() => this.signOrLogHandler()}>New to Spender? Sign up here.</p>
                </div>
            );
        }else if(this.state.signOrLog === "signup"){
            signOrLog = (
                <div>
                    <button className='log-or-sign-btn' onClick={() => this.props.history.push("/home")}>SIGN UP</button>
                    <p className='log-or-sign-text' onClick={() => this.signOrLogHandler()}>Already have a Spender account? Log in here.</p>
                </div>
            );
        }
        return (
        <Aux>
            <div className='Login'>
                    <h1 className='loginLogo'>SPENDER</h1>
                    <p className='loginLogoBio'>Spend. Budget. Save.</p>
                    <i className="far fa-user-circle fa-10x loginIcon"></i>
                    <br></br>
                    <input type="text" placeholder='Email'></input>
                    <input type="text" placeholder='Password'></input>
                    {signOrLog}
            </div>
        </Aux>
        )
    }
}

export default Login;