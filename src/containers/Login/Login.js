import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Login.css';
import Aux from '../../hoc/Aux/Aux';

import * as actions from '../../store/actions';
import {connect} from 'react-redux';

class Login extends Component {
    state = {
        email: '',
        password: '',
        isSignUp: false
    }

    onSignHandler = () => {
        if(this.state.isSignUp) {
            this.setState({isSignUp: false});
        }else{
            this.setState({isSignUp: true});
        }
    }

    onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.email.length === 0 || this.state.password === 0) {
          alert('Please fill out all fields!')
        }
        this.props.onAuth(this.state.email, this.state.password, this.state.isSignUp)    
    }

    render () {
        let signOrLog = null;
        let loginIcon = (
            <i className="far fa-user-circle fa-10x loginIcon"></i>
        )
        if(this.state.isSignUp === false){
            signOrLog = (
                <div>
                    <button className='log-or-sign-btn' onClick={this.onSubmitHandler} type="submit">LOG IN</button>
                    <p className='log-or-sign-text' onClick={() => this.onSignHandler()}>New to Spender? Sign up here.</p>
                </div>
            );
        }else if(this.state.isSignUp === true){
            signOrLog = (
                <div>
                    <button className='log-or-sign-btn' onClick={this.onSubmitHandler} type="submit">SIGN UP</button>
                    <p className='log-or-sign-text' onClick={() => this.onSignHandler()}>Already have a Spender account? Log in here.</p>
                </div>
            );
        }

        // Error in logging in or signing up
        let errorMsg = null;
        if(this.props.error) {
            if(this.props.error.message === 'INVALID_PASSWORD') {
                errorMsg = (
                <div className='loginNote'>
                    <p className='m-0'><i className="fas fa-exclamation-circle"></i><strong> Let's try that again</strong></p>
                    <p>The password you entered is incorrect. Try again, or choose another login option.</p>
                </div>
                )
                loginIcon = (
                    <i className="far fa-user-circle fa-10x loginIcon2"></i>
                )
            }
            else if (this.props.error.message === 'EMAIL_NOT_FOUND') {
                errorMsg = (
                <div>
                    <p className='m-0'><i className="fas fa-exclamation-circle"></i><strong> Let's try that again</strong></p>
                    <p>The email you entered is incorrect. Try again, or choose another login option.</p>
                </div>
                )
                loginIcon = (
                    <i className="far fa-user-circle fa-10x loginIcon2"></i>
                )
            }
            else if (this.props.error.message === 'EMAIL_EXISTS') {
                errorMsg = (
                <div>
                    <p className='m-0'><i className="fas fa-exclamation-circle"></i><strong> Let's try that again</strong></p>
                    <p>The email you entered already exists.</p>
                </div>
                )
                loginIcon = (
                    <i className="far fa-user-circle fa-10x loginIcon2"></i>
                )
            }
        } 

        // If logged in, redirect to todo page
        if (this.props.token !== null) {
            return (<Redirect to='/home' />);
        }

        return (
        <Aux>
            <div className='Login'>
                    <h1 className='loginLogo'>SPENDER</h1>
                    <p className='loginLogoBio'>Spend. Budget. Save.</p>
                    {loginIcon}
                    <br></br>
                    {errorMsg}
                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Email"
                            name="email"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.email}></input>
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="exampleInputPassword1" 
                                placeholder="Password"
                                name="password"
                                onChange={(event) => this.onChange(event)}
                                value={this.state.password}></input>
                        </div>
                    {signOrLog}
            </div>
        </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
      error: state.error,
      token: state.token
    }
}
  
  
const mapDispatchToProps = dispatch => {
    return {
      onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;
  