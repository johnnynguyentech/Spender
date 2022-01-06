import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ScrollToTop from '../hoc/ScrollToTop/ScrollToTop';
import Home from './Home/Home';
import Login from './Login/Login';
import Expense from './Expense/Expense';
import History from './History/History';
import Settings from './Settings/Settings';

import './Spender.css';

class Spender extends Component {

    render () {
        return (
            <div className="Spender">
              <ScrollToTop>
                <Switch>
                  <Route path="/" exact component={Login} />
                  <Route path="/home" exact component={Home} />
                  <Route path="/expense" exact component={Expense} />
                  <Route path="/history" exact component={History} />
                  <Route path="/settings" exact component={Settings} />
                  <Route render={() => <center><h1 id="error">404 Not Found</h1></center>} />
                </Switch>
              </ScrollToTop>
            </div>
        );
    }
}

export default Spender;