import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ScrollToTop from '../hoc/ScrollToTop/ScrollToTop';
import Home from './Home/Home';
import Login from './Login/Login';
import Expense from './Expense/Expense';
import History from './History/History';
import Settings from './Settings/Settings';
import Logout from './Logout/Logout';
import NotFound from './NotFound/NotFound';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import './Spender.css';

class Spender extends Component {
    componentDidMount () {
        this.props.onAutoSignUp();
    }

    render () {
        let routes = (
            <ScrollToTop>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </ScrollToTop>
        );

        if(this.props.isAuthenticated) {
            routes = (
                <ScrollToTop>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/expense" exact component={Expense} />
                        <Route path="/history" exact component={History} />
                        <Route path="/settings" exact component={Settings} />
                        <Route path="/logout" component={Logout} />
                        <Route render={() => <center><h1 id="error">404 Not Found</h1></center>} />
                    </Switch>
              </ScrollToTop>
            );
        }
        return (
            <div className="Spender">
              {routes}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onAutoSignUp: () => dispatch(actions.authCheckState())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Spender);